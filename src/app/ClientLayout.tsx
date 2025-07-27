'use client';

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { SolanaMultiWalletProvider } from '@/components/client/wallet-adapter/SolanaMultiWalletProvider';
import { theme } from '@/components/client/theme/theme';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SolanaMultiWalletProvider>{children}</SolanaMultiWalletProvider>
    </ThemeProvider>
  );
};

export default ClientLayout;
