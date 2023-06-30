export type Props = {
  image: string;
  text: string;
};

export default function ReceivedMessage({ image, text }: Props) {
  return (
    <div className="flex flex-row justify-start p-1">
      <div className="relative mr-4 flex h-8 w-8 flex-shrink-0">
        <img
          className="h-full w-full rounded-full object-cover shadow-md"
          src={image}
          alt=""
        />
      </div>
      <div className="messages grid grid-flow-row gap-2 text-sm text-gray-700">
        <div className="group flex items-center">
          <p className="max-w-xs rounded-r-full bg-gray-800 px-6 py-3 text-gray-200 lg:max-w-md">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
