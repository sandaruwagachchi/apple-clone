import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://94e07ce7fc424e0fcbac78c3f4e50d22@o4508790568714240.ingest.us.sentry.io/4508790571532288",
  integrations: [
    Sentry.browserTracingIntegration(),
    // ⚠️ Remove metricsAggregatorIntegration() if it doesn't exist
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
