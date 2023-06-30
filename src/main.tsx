import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { UsernameProvider } from './contexts/UsernameContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UsernameProvider>
    <App />
  </UsernameProvider>,
);
