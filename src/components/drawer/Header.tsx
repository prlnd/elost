import { useContext } from 'react';
import { user } from '../../user';
import { UsernameSetterContext } from '../../contexts/UsernameContext';

export default function Header() {
  const setUsername = useContext(UsernameSetterContext);

  function handleSignOut() {
    user.leave();
    setUsername('');
  }

  return (
    <div className="header flex flex-none flex-row items-center justify-between p-4 pr-4">
      <div
        className="relative flex h-16 w-16 flex-shrink-0"
        style={{ filter: 'invert(100%)' }}
      >
        <img
          className="h-full w-full rounded-full object-cover"
          alt="Vite logo"
          src="/vite.svg"
          onClick={() => alert(user.pair().pub)}
        />
      </div>
      <p className="text-md hidden font-bold group-hover:block md:block">
        Messenger
      </p>
      <button
        className="block h-10 w-10 rounded-full bg-gray-800 p-2 hover:bg-gray-700 group-hover:block md:block"
        onClick={handleSignOut}
      >
        <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
          <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
        </svg>
      </button>
    </div>
  );
}
