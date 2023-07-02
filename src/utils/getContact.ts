import { gun } from '../user';
import { defaultContact } from './defaultContact';
import { getAvatar } from './getAvatar';
import { UserContact } from './types';

export async function getContact(newKey: string): Promise<UserContact | null> {
  if (!newKey) {
    return defaultContact;
  }

  const urlRegex =
    /^(https?:\/\/)(?!localhost)[a-zA-Z0-9-_.]+(:\d+)?(\/[a-zA-Z0-9-_.]+)*\/?$/;
  if (urlRegex.test(newKey)) {
    return {
      name: newKey,
      image: newKey + '/favicon.ico',
      publicKey: newKey,
    };
  }

  const to: any = gun.user(newKey);
  const who = await to.then();
  if (who?.alias) {
    const alias: string = who.alias;
    return {
      name: alias,
      image: getAvatar(alias),
      publicKey: newKey,
    };
  }

  return null;
}
