import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.scss';
import App from './app/App';
import { initReducedMotionListener } from './store/narrativeStore';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

initReducedMotionListener();
