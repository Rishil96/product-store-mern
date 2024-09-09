# Product Store using MERN Stack

## Backend

- Initialize project with node using **npm init -y** in root directory.
- Install nodemon as a dev dependency using **npm install nodemon -D** in the projects root folder
- and add `"dev": "nodemon backend/server.js"` in package.json scripts list to run the server using nodemon which restarts the server automatically everytime we make changes.
- after above steps we can run backend using **npm run dev** and it will restart automatically if changes are detected.

## Frontend

- Initialize react project in frontend folder with **npm create vite@latest .**
- Follow up with **npm install**.
- Use Chakra UI as our UI component library to speed up our process. In our frontend folder use **npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion**.
- In our main.jsx file, wrap our App Component which is our starting component in our frontend with ChakraProvider tags for us to effectively use Chakra components in our frontend.
- Remove CSS files index.css and App.css as we won't use it.
- Install react-router-dom and wrap our App component in main.jsx with BrowserRouter component that allows us to add multiple routes/pages in our frontend and switch between them effectively without refreshing the entire page.