export type UserContact = {
  name: string;
  image: string;
  publicKey: string;
};

export type FetchedMessage = {
  who: string;
  what: string;
  when: number;
};

export type Message = {
  status: 'received' | 'sent';
  content: string;
  image: string;
  timestamp: string;
};
