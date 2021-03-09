import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { SocketProvider } from './context/SocketContext';
import AppRouter from './routers/AppRouter';

const ChatApp = () => {
	return (
		<AuthProvider>
			<SocketProvider>
				<AppRouter />
			</SocketProvider>
		</AuthProvider>
	);
};

export default ChatApp;