# SimplCord - Chat Application 
SimplCord is a chat application built with the power of MERN Stack.


![login page](https://github.com/neeravgg/SimplCord/assets/68321206/a0da0bcb-6dfc-45e4-9382-565d90a20560)

![home page](https://github.com/neeravgg/SimplCord/assets/68321206/a1cf2eee-c3a3-4df2-972d-e41eb8cd59a0)

## Installation Guide

Both should be installed and make sure MongoDB is running.

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

Open another terminal in a folder, Also make sure MongoDB is running in the background.
```shell
cd server
yarn start
```

Done! Now open localhost:3000 in your browser.
