# Real-Time-chat-application
*COMPANY*: CODTECH IT SOLUTIONS
*NAME*: BHAKTI SHINDE
*INTERN ID*: CT04DF1531
*DOMAIN*: FRONTEND WEB DEVELOPMENT
*DURATION*: 4 WEEKS
*MENTOR*: NEELA SANTOSH

In this task, I developed a real-time chat application using React.js and the WebSocket API. The main goal was to create a frontend-only chat interface where users could send and receive messages instantly. This task helped me understand how real-time communication works on the web and how modern chat applications are built.

The application features a responsive and interactive user interface built with React.js. Users can type a message, send it, and see it appear instantly in the chat box. On the backend side, a public WebSocket echo server (wss://echo.websocket.events) is used, which simply returns whatever message the client sends. This was perfect for testing real-time communication without needing to create a server.

React’s functional components and hooks like useState, useEffect, and useRef were used to manage the chat logic. The useState hook stores chat messages and input values, while useRef manages the WebSocket instance across renders. The useEffect hook is responsible for opening the WebSocket connection when the component mounts and closing it when the component unmounts, ensuring proper resource management.

The styling is done using inline CSS for simplicity and includes responsive layout and clean typography. Messages sent by the user appear on the right, while messages received from the server appear on the left. This separation enhances readability and gives a real chat-like feel.

This task taught me how to manage WebSocket events like onopen, onmessage, and onclose, as well as how to update the UI in response to these events. It also gave me hands-on experience with real-time data flow and asynchronous message handling in a frontend environment.

Working on this project improved my understanding of React components, state management, and the use of refs. I also gained insight into how real-time apps function under the hood. Even though this version used a public echo server, the same frontend structure could be extended to support a real backend, group chat, message history, and user authentication.

In conclusion, this task was a valuable experience that combined frontend UI building with live data communication. It demonstrated how a chat application works from a frontend perspective and how to handle real-time updates with WebSocket and React. The app is lightweight, responsive, and a great example of integrating dynamic features into modern web applications.

*OUTPUT*
<img width="1388" height="842" alt="Image" src="https://github.com/user-attachments/assets/dfa429a8-2c9f-4c02-ab3b-7ced4bb8c7f5" />


