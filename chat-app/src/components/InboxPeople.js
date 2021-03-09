import React from 'react';

const InboxPeople = ({ uid, nombre, correo, online, active = '' }) => {
	return (
		<div className={`cursor-pointer flex flex-row py-4 px-2 items-center border-b-2 ${active}`}>
			<div className="w-1/4">
				<div className="h-12 w-12 p-2 bg-blue-400 rounded-full text-white font-semibold flex items-center justify-center text-2xl">{nombre.slice(0, 1)}</div>
			</div>
			<div className="w-full">
				<div className="text-lg font-semibold">{nombre}</div>
				{online ? <span className="text-green-500">Online</span> : <span className="text-gray-500">Offline</span>}
			</div>
		</div>
	);
};

export default InboxPeople;
