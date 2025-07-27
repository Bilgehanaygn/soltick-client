import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import * as borsh from "borsh";
import {
  CREATE_EVENT_DISCRIMINATOR,
  CreateEventBorshSchema,
  CreateEventInstruction,
  EVENT_ACCOUNT_SPACE,
} from "./model";
import { getProgramId } from "../utils/getProgramId";
import { CreateEventModel } from "@/components/client/create-event/model";

export const handleCreateEvent = async ({
  publicKey,
  connection,
  eventData,
}: {
  publicKey: PublicKey;
  connection: Connection;
  eventData: CreateEventModel;
}) => {
  const eventAccount = Keypair.generate();
  const lamports = await connection.getMinimumBalanceForRentExemption(
    EVENT_ACCOUNT_SPACE
  );

  const inst = new CreateEventInstruction({
    price: eventData.price,
    tickets_total: eventData.tickets_total,
    event_name: eventData.event_name,
    event_address: eventData.event_address,
  });

  const payload = borsh.serialize(CreateEventBorshSchema, inst);
  const data = Buffer.concat([
    CREATE_EVENT_DISCRIMINATOR,
    Buffer.from(payload),
  ]);

  const createAccountIx = SystemProgram.createAccount({
    fromPubkey: publicKey,
    newAccountPubkey: eventAccount.publicKey,
    lamports,
    space: EVENT_ACCOUNT_SPACE,
    programId: getProgramId(),
  });

  const initIx = new TransactionInstruction({
    keys: [
      { pubkey: publicKey, isSigner: true, isWritable: false },
      { pubkey: eventAccount.publicKey, isSigner: true, isWritable: true },
      {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false,
      },
      { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
    ],
    programId: getProgramId(),
    data,
  });

  const tx = new Transaction().add(createAccountIx, initIx);
  const signature = await sendAndConfirmTransaction(
    connection,
    tx,
    [eventAccount],
    { commitment: "processed" }
  );

  const latestBlockHash = await connection.getLatestBlockhash("processed");
  await connection.confirmTransaction(
    {
      signature: signature,
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    },
    "processed"
  );

  console.log("Event created:", signature);
  alert(`Event created! Transaction signature: ${signature}`);
};
