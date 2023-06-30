import { FormEvent, useContext, useState } from 'react';
import { gun, user } from '../../user';
import { ContactContext } from '../../contexts/ContactContext';

export default function ChatFooterInput() {
  const contact = useContext(ContactContext);
  const [message, setMessage] = useState('');

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const secret: any = await Gun.SEA.encrypt(message, '#foo');
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
          <button
            type="submit"
            className="absolute right-0 top-0 mr-3 mt-2 flex h-6 w-6 flex-shrink-0 text-blue-600 hover:text-blue-700 focus:outline-none"
            disabled={!message}
          >
            <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
            </svg>
          </button>
        </form>
      </label>
    </div>
  );
}
