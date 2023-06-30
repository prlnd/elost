import { useContext } from 'react';
import { ContactContext } from '../../contexts/ContactContext';

export default function ChatHeader() {
  const contact = useContext(ContactContext);

  return (
    <div className="chat-header flex flex-none flex-row items-center justify-between px-6 py-4 shadow">
      <div className="flex">
        <div className="relative mr-4 flex h-12 w-12 flex-shrink-0">
          <img
            className="h-full w-full rounded-full object-cover shadow-md"
            src={contact.image}
            alt="user"
          />
        </div>
        <div className="text-lg">
          <p className="font-bold">{contact.name}</p>
        </div>
      </div>
    </div>
  );
}
