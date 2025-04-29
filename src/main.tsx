import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle from './globalsStyle.ts'

import Home from './assets/pages/Home/index.tsx'

  const arrayRoutes = [
    {
      path: '/',
      element: (
        <StrictMode>
          <GlobalStyle />
          <Home />
        </StrictMode>
      )    
    }
  ]
  
const router = createBrowserRouter(arrayRoutes);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
