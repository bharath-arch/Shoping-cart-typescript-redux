import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./Redux/store.ts";
import { Provider } from "react-redux";
import App from "./App.tsx";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
