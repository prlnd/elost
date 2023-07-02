import { FormEvent, useContext, useState } from 'react';
import { gun, user } from '../../user';
import { ContactContext } from '../../contexts/ContactContext';

export default function ChatFooterInput() {
  const contact = useContext(ContactContext);
  const [message, setMessage] = useState('');

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const secret: any = await Gun.SEA.encrypt(message, '#secret');
    const encrypted = user.get('all').set({ what: secret });
    const index = new Date().toISOString();
    gun.get(contact.publicKey).get(index).put(encrypted);
    setMessage('');
  }

  return (
    <div className="relative flex-grow">
      <label>
        <form onSubmit={sendMessage}>
          <input
            className="w-full rounded-full border border-gray-800 bg-gray-800 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
            type="text"
            placeholder="Aa"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </form>
      </label>
    </div>
  );
}
