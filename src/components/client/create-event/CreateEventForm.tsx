"use client";

import React, { useState } from "react";
import { useZodForm } from "@/utils/form/useZodForm";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { handleCreateEvent } from "@/on-chain/create-event/CreateEvent";
import { CreateEventModel, createEventSchema } from "./model";
import { Connection } from "@solana/web3.js";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";

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
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "rgba(255,255,255,0.7)",
          borderRadius: 2,
          p: 4,
          width: "100%",
          maxWidth: 600,
        }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Create Event
        </Typography>

        <TextField
          label="Price"
          type="number"
          inputProps={{ step: 1 }}
          fullWidth
          margin="normal"
          {...register("price", { valueAsNumber: true })}
          error={!!errors.price}
          helperText={errors.price?.message}
        />

        <TextField
          label="Total Tickets"
          type="number"
          inputProps={{ step: 1 }}
          fullWidth
          margin="normal"
          {...register("tickets_total", { valueAsNumber: true })}
          error={!!errors.tickets_total}
          helperText={errors.tickets_total?.message}
        />

        <TextField
          label="Event Name"
          type="text"
          fullWidth
          margin="normal"
          {...register("event_name")}
          error={!!errors.event_name}
          helperText={errors.event_name?.message}
        />

        <TextField
          label="Event Address"
          type="text"
          fullWidth
          margin="normal"
          {...register("event_address")}
          error={!!errors.event_address}
          helperText={errors.event_address?.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}>
          Create Event
        </Button>
      </Paper>
    </Box>
  );
};

export default CreateEventForm;
