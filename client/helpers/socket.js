import { io } from 'socket.io-client';
// const isDev = process.env.NODE_ENV === 'development';

const socket = io(
  'http://app-bfebb149-d160-415d-938b-26f9d2b10e55.cleverapps.io'
);
export default socket;
