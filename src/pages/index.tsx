import React, { ReactElement } from 'react';
import Directory from '../components/Directory';

interface Props {}

function HomePage({}: Props): ReactElement {
	return (
		<div className='flex flex-col items-center py-5 px-20'>
			<div className='w-full flex flex-wrap justify-between'>
				<Directory />
			</div>
		</div>
	);
}

export default HomePage;
