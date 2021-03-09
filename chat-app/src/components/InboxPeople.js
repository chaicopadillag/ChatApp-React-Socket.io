import React from 'react';

const InboxPeople = ({ active = '' }) => {
	return (
		<div className={`cursor-pointer flex flex-row py-4 px-2 items-center border-b-2 ${active}`}>
			<div className="w-1/4">
				<img alt="" className="object-cover h-12 w-12 rounded-full" src="https://source.unsplash.com/_7LbC5J-jw4/600x600" />
			</div>
			<div className="w-full">
				<div className="text-lg font-semibold">Vivian Konopelski</div>
				<span className="text-gray-500">Desconectado</span>
			</div>
		</div>
	);
};

export default InboxPeople;
