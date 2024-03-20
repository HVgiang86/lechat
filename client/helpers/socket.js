import { io } from 'socket.io-client';
// const isDev = process.env.NODE_ENV === 'development';

const socket = io('https://lechatbe1.cleverapps.io/');
export default socket;
