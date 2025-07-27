import { PublicKey } from '@solana/web3.js';

export const getProgramId = (): PublicKey => {
  const programId = process.env.DEVNET_PROGRAM_ID;
  if (!programId) {
    throw new Error('DEVNET_PROGRAM_ID environment variable is not set');
  }
  return new PublicKey(programId);
};
