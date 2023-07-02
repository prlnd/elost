import { useContext, useEffect, useState } from 'react';
import { UsernameContext } from '../contexts/UsernameContext';
import { gun } from '../user';
import GUN from 'gun';
import { ContactContext } from '../contexts/ContactContext';
import { FetchedMessage, Message } from '../utils/types';
import { getAvatar } from '../utils/getAvatar';

export function useMessages() {
  const username = useContext(UsernameContext);
  const contact = useContext(ContactContext);
  const [fetchedMessages, setFetchedMessages] = useState<FetchedMessage[]>([]);

  useEffect(() => {
    gun
      .get(contact.publicKey)
      .map()
      .once(async data => {
        if (!data) {
          return;
        }
        const key = '#secret';

        const message = {
          who: (await gun.user(data).get('alias')) as any,
          what: String(await Gun.SEA.decrypt(data.what, key)),
          when: (GUN.state as any).is(data, 'what'),
        };

        if (message.what) {
          setFetchedMessages(prevMessages => {
            const nextMessages = prevMessages.slice(-100);
            nextMessages.push(message);
            return nextMessages.sort((a, b) => a.when - b.when);
          });
        }
      });
  }, [contact.publicKey]);

  return fetchedMessages.map<Message>(message => ({
    status: message.who === username ? 'sent' : 'received',
    content: message.what,
    image: getAvatar(message.who),
    timestamp: new Date(message.when).toLocaleTimeString(),
  }));
}
