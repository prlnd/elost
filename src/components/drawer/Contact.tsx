import { UserContact } from '../../utils/types';

export default function Contact({ name, image }: UserContact) {
  return (
    <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
      <div className="relative flex h-16 w-16 flex-shrink-0">
        <img
          className="h-full w-full rounded-full object-cover shadow-md"
          src={image}
          alt="avatar"
        />
      </div>
      <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
        <p>{name}</p>
      </div>
    </div>
  );
}
