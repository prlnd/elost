import { useContext, useState } from 'react';
import { ExtensionInfo, UserContact } from '../../utils/types';
import Extension from './Extension';
import { ContactContext } from '../../contexts/ContactContext';
import { gun } from '../../user';

const dummyExtensions: ExtensionInfo[] = [
  {
    name: 'Return Youtube Dislike',
    author: 'Satoshi Nakamoto',
    downloads: 1,
    id: 'a1d6f39a-cadd-4bc3-b799-fc5130d3a410',
  },
  {
    name: 'Colorful sites',
    author: 'Mark Nadal',
    downloads: 10,
    id: '42a1fd9f-c071-4012-b31e-31e724579e0b',
  },
];

let lastContact: UserContact | null = null;

export default function ExtensionList() {
  const contact = useContext(ContactContext);
  const [installedExtensions, setInstalledExtensions] = useState<
    ExtensionInfo[]
  >([]);

  console.log('installedExtensions', installedExtensions);

  function handleExtensionClick(extension: ExtensionInfo) {
    console.log('installing', extension);
    setInstalledExtensions(prev => {
      const next = prev.filter(ext => ext !== extension);
      if (next.length === prev.length) {
        next.push(extension);
      }
      return next;
    });
  }

  if (lastContact !== contact) {
    (async function () {
      for (const ext of installedExtensions) {
        const content: any = await gun.get(ext.id);
        const result = eval(content);
        if (typeof result === 'function') {
          await result(contact.publicKey);
        }
      }
    })();
    lastContact = contact;
  }

  return (
    <div className="contact-list flex-1 overflow-y-scroll p-2">
      {dummyExtensions.map(ext => (
        <Extension
          key={ext.id}
          extension={ext}
          onClick={handleExtensionClick}
        />
      ))}
    </div>
  );
}
