'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { menuItems } from './menu-items';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useTheme } from '@mui/material/styles';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingLeft: '20px',
  },
  groupedButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
  },
  logo: {
    marginRight: '30px',
  },
  button: {
    marginRight: '20px',
    padding: '8px 16px',
    border: 'none',
    background: 'transparent',
    color: 'black',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

const TopBar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const activeBg = theme.palette.primary.main;
  const activeColor = theme.palette.getContrastText(activeBg);

  return (
    <div style={styles.container}>
      <div style={styles.groupedButtonContainer}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          style={styles.logo}
        />
        {menuItems.map(item => {
          const isActive = pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              style={{
                ...styles.button,
                ...(isActive && {
                  backgroundColor: activeBg,
                  color: activeColor,
                }),
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div style={styles.groupedButtonContainer}>
        <WalletMultiButton />
      </div>
    </div>
  );
};

export default TopBar;
