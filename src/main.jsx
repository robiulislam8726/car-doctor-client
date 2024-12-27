import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'

import router from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-7xl'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>,
  </div>
)
