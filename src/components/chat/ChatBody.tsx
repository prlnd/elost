import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';
import { Message } from '../../utils/types';

export type Props = {
  messages: Message[];
};

export default function ChatBody({ messages }: Props) {
  return (
    <div className="chat-body flex-1 overflow-y-scroll p-4">
      {messages.map(({ status, image, content, timestamp }) =>
        status === 'received' ? (
          <ReceivedMessage key={timestamp} image={image} text={content} />
        ) : (
          <SentMessage key={timestamp} image={image} text={content} />
        ),
      )}
    </div>
  );
}
