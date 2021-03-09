import React from 'react';
import InboxPeople from './InboxPeople';
import SearchBox from './SearchBox';

const SidebarMessage = () => {
	const mensajes = [1, 2, 3, 4, 5, 6];
	return (
		<div className="flex flex-col w-2/5 border-r-2">
			<SearchBox />
			<div className="overflow-y-auto">
				{mensajes.map((num) => (num === 2 ? <InboxPeople key={num} active="border-l-4 border-blue-400" /> : <InboxPeople key={num} active="" />))}
			</div>
		</div>
	);
};

export default SidebarMessage;
