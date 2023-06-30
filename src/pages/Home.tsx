import Chat from '../components/Chat';
import Drawer from '../components/Drawer';
import { useContext } from 'react';
import { ContactContext } from '../contexts/ContactContext';

export default function Home() {
  const contact = useContext(ContactContext);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-900 text-gray-200 antialiased">
      <main className="flex min-h-0 flex-grow flex-row">
        <Drawer />
        <Chat key={contact.publicKey} />
      </main>
    </div>
  );
}
