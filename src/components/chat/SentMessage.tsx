export type Props = {
  image: string;
  text: string;
};

export default function SentMessage({ image, text }: Props) {
  return (
    <div className="flex flex-row justify-end p-1">
      <div className="sent-messages grid grid-flow-row gap-2 text-sm text-white">
        <div className="group flex flex-row-reverse items-center">
          <p className="max-w-xs rounded-l-full bg-blue-700 px-6 py-3 lg:max-w-md">
            {text}
          </p>
        </div>
      </div>
      <div className="relative ml-4 flex h-8 w-8 flex-shrink-0">
        <img
          className="h-full w-full rounded-full object-cover shadow-md"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
}
