import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ContextProvider from './Components/Context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
