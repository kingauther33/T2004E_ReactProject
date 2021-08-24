import React, { createContext, useState } from 'react';

export const AdminSelectedMenuContext = createContext({
	selectedMenu: '',
	setColumn: (selectedMenu) => {},
});

const AdminSelectedMenuProvider = (props) => {
	const [selectedMenu, setSelectedMenu] = useState('Dashboard');

	const getSelectedMenu = (column) => {
		console.log(column);
		setSelectedMenu(column);
	};

	return (
		<AdminSelectedMenuContext.Provider
			value={{
				selectedMenu,
				getSelectedMenu,
			}}
		>
			{props.children}
		</AdminSelectedMenuContext.Provider>
	);
};

export default AdminSelectedMenuProvider;
