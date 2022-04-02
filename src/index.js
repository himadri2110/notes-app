import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ArchiveProvider,
  AuthProvider,
  NotesProvider,
  TrashProvider,
} from "contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <NotesProvider>
          <ArchiveProvider>
            <TrashProvider>
              <App />
            </TrashProvider>
          </ArchiveProvider>
        </NotesProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
