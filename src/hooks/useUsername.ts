import { useEffect, useState } from 'react';
import { gun, user } from '../user';
import { IGunOnEvent } from 'gun';

export function useUsername() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    let listener: IGunOnEvent | null = null;

    gun.on('auth', async (_user, _message, event) => {
      listener = event;
      const alias: any = await user.get('alias');
      console.log('auth', alias);
      setUsername(alias);
      console.log('signed in as', alias);
    });

    return () => {
      listener?.off();
      listener = null;
    };
  }, []);

  return [username, setUsername] as const;
}
