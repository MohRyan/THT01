import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from './components/ui/provider.tsx'
import { Provider as ProviderRedux } from "react-redux";
import store from "./redux/index.ts";
import "../app/global.css";




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderRedux store={store}>
      <Provider>
        <App />
      </Provider>
    </ProviderRedux>
  </StrictMode>,
)
