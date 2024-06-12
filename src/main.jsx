import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-rc5gpnca4n4x.frontegg.com',
  clientId: '344adf40-4a1d-431f-a532-942670fda933'
};

const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true} authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);