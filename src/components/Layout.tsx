import React, { ReactElement } from 'react';
import Header from './Header';

interface Props {
	children: ReactElement | ReactElement[];
}

function Layout({ children }: Props): ReactElement {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default Layout;
