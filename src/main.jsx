import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import App from './App.jsx';
import { TransactionProvider } from './context/transactionContext/transactionProvider.jsx';
import { UserProvider } from './context/userContext/userProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserProvider>
            <TransactionProvider>
                 <App/>
            </TransactionProvider>
        </UserProvider>   
    </StrictMode>      

)
