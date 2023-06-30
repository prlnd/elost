import ChatFooterLike from './ChatFooterLike';
import ChatFooterInput from './ChatFooterInput';
import ChatFooterButtons from './ChatFooterButtons';

export default function ChatFooter() {
  return (
    <div className="chat-footer flex-none">
      <div className="flex flex-row items-center p-4">
        <ChatFooterButtons />
        <ChatFooterInput />
        <ChatFooterLike />
      </div>
    </div>
  );
}
