"use client";

import { SolanaMultiWalletProvider } from "@/components/client/wallet-adapter/SolanaMultiWalletProvider";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SolanaMultiWalletProvider>{children}</SolanaMultiWalletProvider>
    </div>
  );
};

export default ClientLayout;
