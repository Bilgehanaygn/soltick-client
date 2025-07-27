"use client";

import React, { useState } from "react";
import { useZodForm } from "@/utils/form/useZodForm";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { handleCreateEvent } from "@/on-chain/create-event/CreateEvent";
import { CreateEventModel, createEventSchema } from "./model";
import { Connection } from "@solana/web3.js";

const CreateEventForm: React.FC = () => {
  const { connection }: { connection: Connection } = useConnection();
  const { publicKey } = useWallet();
  const [, setTxLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm(createEventSchema);

  const onSubmit = (data: CreateEventModel) => {
    if (!publicKey) {
      alert("Connect your wallet first");
      return;
    }

    setTxLoading(true);

    try {
      handleCreateEvent({
        publicKey,
        connection,
        eventData: data,
      });
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed. Please try again.");
    } finally {
      setTxLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          step="1"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <div>
        <label htmlFor="tickets_total">Total Tickets</label>
        <input
          id="tickets_total"
          type="number"
          step="1"
          {...register("tickets_total", { valueAsNumber: true })}
        />
        {errors.tickets_total && <p>{errors.tickets_total.message}</p>}
      </div>

      <div>
        <label htmlFor="event_name">Event Name</label>
        <input id="event_name" type="text" {...register("event_name")} />
        {errors.event_name && <p>{errors.event_name.message}</p>}
      </div>

      <div>
        <label htmlFor="event_address">Event Address</label>
        <input id="event_address" type="text" {...register("event_address")} />
        {errors.event_address && <p>{errors.event_address.message}</p>}
      </div>

      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEventForm;
