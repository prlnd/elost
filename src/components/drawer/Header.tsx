import { useContext } from 'react';
import { user } from '../../user';
import {
  UsernameContext,
  UsernameSetterContext,
} from '../../contexts/UsernameContext';
import { getAvatar } from '../../utils/getAvatar';

export default function Header() {
  const username = useContext(UsernameContext);
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
          src={getAvatar(username)}
          alt={`${username}'s avatar`}
          onClick={() => alert(`Your publick key:\n${user.pair().pub}`)}
        />
      </div>
      <p className="text-md hidden font-bold group-hover:block md:block">
        Elost
      </p>
      <button
        className="block h-10 w-10 rounded-full bg-gray-800 p-2 hover:bg-gray-700 group-hover:block md:block"
        onClick={handleSignOut}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </button>
    </div>
  );
}
