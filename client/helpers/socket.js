import { io } from 'socket.io-client';

const isDev = process.env.NODE_ENV === 'development';

const socket = io('https://8ae3-118-71-137-84.ngrok-free.app');
export default socket;
