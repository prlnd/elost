import { useState } from 'react';
import { user } from '../user';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('login with', username, password);
    user.auth(username, password, ({ err }: { err: any }) => err && alert(err));
  }

  function handleSignUp() {
    console.log('sign up with', username, password);
    user.create(username, password, ({ err }: { err: any }) => {
      if (err) {
        alert(err);
      } else {
        handleLogin();
      }
    });
  }

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 sm:py-12">
      <div className="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
        <h1 className="mb-5 text-center text-2xl font-bold">Elost</h1>
        <div className="w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="px-5 py-7">
            <label className="block pb-1 text-sm font-semibold text-gray-600">
              E-mail
            </label>
            <input
              type="text"
              className="mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              value={username}
              onChange={e => setUsername(e.target.value)}
              minLength={3}
              maxLength={16}
            />
            <label className="block pb-1 text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              value={password}
              onChange={e => setPassword(e.target.value)}
              minLength={8}
            />
            <button
              type="button"
              className="mb-5 inline-block w-full rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600 hover:shadow-md focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handleLogin}
            >
              <span className="mr-2 inline-block">Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-block h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              type="button"
              className="inline-block w-full rounded-lg bg-white py-2.5 text-center text-sm font-semibold text-gray-600 shadow-sm transition duration-200 hover:text-gray-800 hover:shadow-md focus:bg-gray-100 focus:shadow-sm focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
              onClick={handleSignUp}
            >
              <span className="mr-2 inline-block">Sign Up</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-block h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
