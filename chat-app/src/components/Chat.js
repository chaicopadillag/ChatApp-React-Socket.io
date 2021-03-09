import React from 'react';
import InboundMessage from './InboundMessage';
import NotSelectedChat from './NotSelectedChat';
import OutgoingMessage from './OutgoingMessage';
import SendMessage from './SendMessage';

const Chat = () => {
	const mensajes = [];
	return (
		<div className="w-full flex flex-col justify-between bg-gray-100">
			<div className="flex flex-col px-4 mt-5 overflow-y-auto items-center">
				{mensajes.length > 0 ? mensajes.map((num) => (num % 2 ? <InboundMessage key={num} /> : <OutgoingMessage key={num} />)) : <NotSelectedChat />}
			</div>
			<SendMessage />
		</div>
	);
};

export default Chat;
