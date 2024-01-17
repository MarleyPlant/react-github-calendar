import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Docs from './components/Docs.tsx';

const container = document.getElementById('root');

if (!container) {
  throw Error('#root not found');
}

const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Docs />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
