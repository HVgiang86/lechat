import { io } from 'socket.io-client';
// const isDev = process.env.NODE_ENV === 'development';

const socket = io('http://192.168.0.243:8080');
export default socket;
