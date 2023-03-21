import type { Message } from '../types';
import Branch from './Branch';

type Props = {
  index: Number;
  message: Message;
};

const MessageDisplay = ({ message, index }: Props) => {
  return (
    <div className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-40 h-20 relative">
      <Branch trunk={index === 0} />
      <p className="text-sm text-gray-200 font-bold px-4">{message.body}</p>
    </div>
  );
};

export default MessageDisplay;
