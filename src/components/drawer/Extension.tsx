import { getAvatar } from '../../utils/getAvatar';
import { ExtensionInfo } from '../../utils/types';

export type Props = {
  extension: ExtensionInfo;
  onClick: (ext: ExtensionInfo) => void;
};

export default function Extension({ extension, onClick }: Props) {
  return (
    <div
      className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800"
      onClick={() => onClick(extension)}
    >
      <div className="relative flex h-16 w-16 flex-shrink-0">
        <img
          className="h-full w-full rounded-full object-cover shadow-md"
          src={getAvatar(extension.name)}
          alt="avatar"
        />
      </div>
      <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
        <p>{extension.name}</p>
        <div className="flex items-center text-sm text-gray-600">
          <div className="min-w-0">
            <p className="truncate">{extension.author}</p>
          </div>
          <p className="whitespace-no-wrap ml-2 overflow-hidden">
            {extension.downloads}
          </p>
        </div>
      </div>
    </div>
  );
}
