// Import React core library
import React from "react";

// Import the method to render React app to the DOM
import ReactDOM from "react-dom/client";

// Import the main App component
import App from "./App";

// Create a root element where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the <App /> component inside the root element
root.render(<App />);
