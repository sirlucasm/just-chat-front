import { connect } from 'socket.io-client';

export const socket = connect(process.env.NEXT_PUBLIC_API_URL || '');
