import express from "express";
import * as env from "./environments/environments";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import socket from 'socket.io';

const app: express.Application = express();
app.use(express.static(__dirname + "/public"));
app.use(cors());
const httpServer: http.Server = http.createServer(app);
const io = new Server(httpServer)

io.on('connection', (socket) =>{
    console.log('Connected to socket.io server');
    socket.on('disconnet', (data) => {    console.log("Disconenct to socket.io server"); });
})

httpServer.listen(env.PORT, () => {
    console.log(`Listening on port ${env.PORT}`);
});



