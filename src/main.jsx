import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './style/index.css';
import App from './App.jsx';
import { TransactionProvider } from './context/transactionContext/transactionProvider.jsx';
import { UserProvider } from './context/userContext/userProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <UserProvider>
                <TransactionProvider>
                    <App/>
                </TransactionProvider>
            </UserProvider> 
        </BrowserRouter>
    </StrictMode>      

)
