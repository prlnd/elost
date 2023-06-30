import { ContactProvider } from './contexts/ContactContext';
import { UsernameContext } from './contexts/UsernameContext';
import Home from './pages/Home';
import Login from './pages/Login';
import { useContext } from 'react';

export default function App() {
  const username = useContext(UsernameContext);
  return username ? (
    <ContactProvider>
      <Home />
    </ContactProvider>
  ) : (
    <Login />
  );
}
