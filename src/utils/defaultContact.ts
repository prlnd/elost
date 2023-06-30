import { getAvatar } from './getAvatar';
import { UserContact } from './types';

export const defaultContact: UserContact = {
  publicKey: 'elost-public-test',
  name: 'Elost Public Test',
  image: getAvatar('Elost Public Test'),
};
