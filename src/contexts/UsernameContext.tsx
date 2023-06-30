import React, { createContext } from 'react';
import { useUsername } from '../hooks/useUsername';

type UsernameSetter = ReturnType<typeof useUsername>[1];

export const UsernameContext = createContext('');

export const UsernameSetterContext = createContext<UsernameSetter>(
  () => undefined,
);

export function UsernameProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useUsername();

  return (
    <UsernameContext.Provider value={username}>
      <UsernameSetterContext.Provider value={setUsername}>
        {children}
      </UsernameSetterContext.Provider>
    </UsernameContext.Provider>
  );
}
