import ExtensionList from './drawer/ExtensionList';
import Header from './drawer/Header';
import SearchBox from './drawer/SearchBox';

export default function Drawer() {
  return (
    <section className="group flex w-24 flex-none flex-col overflow-auto transition-all duration-300 ease-in-out hover:w-64 md:w-2/5 lg:max-w-sm">
      <Header />
      <SearchBox />
      <ExtensionList />
    </section>
  );
}
