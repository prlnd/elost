import ChatFooter from './chat/ChatFooter';
import ChatBody from './chat/ChatBody';
import ChatHeader from './chat/ChatHeader';
import { useMessages } from '../hooks/useMessages';

export default function Chat() {
  const messages = useMessages();
  console.log('messages', messages);

  return (
    <section className="flex flex-auto flex-col border-l border-gray-800">
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatFooter />
    </section>
  );
}
