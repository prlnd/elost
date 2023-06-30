import { ReactNode, createContext, useState } from 'react';
import { UserContact } from '../utils/types';
import { defaultContact } from '../utils/defaultContact';

export const ContactContext = createContext<UserContact>(defaultContact);

export const ContactSetterContext = createContext<(value: UserContact) => void>(
  () => undefined,
);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [contact, setContact] = useState(defaultContact);

  return (
    <ContactContext.Provider value={contact}>
      <ContactSetterContext.Provider value={setContact}>
        {children}
      </ContactSetterContext.Provider>
    </ContactContext.Provider>
  );
}
