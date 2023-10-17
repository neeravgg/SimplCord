# SimplCord - Chat Application 
SimplCord is a web application created with React, Node, and MongoDB to enable secure user communication in the most straightforward manner.


![login page](https://github.com/neeravgg/SimplCord/assets/68321206/a0da0bcb-6dfc-45e4-9382-565d90a20560)

![home page](./images/SimplCord.png)

## Installation Guide

Both should be installed and make sure Mongodb is running.

```shell
git clone https://github.com/koolkishan/chat-app-react-nodejs
cd chat-app-react-nodejs
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
yarn start
```

Done! Now open localhost:3000 in your browser.
