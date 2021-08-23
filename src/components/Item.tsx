import React, { ReactElement } from 'react';

interface Props {
	name: string;
}

function Item({ name }: Props): ReactElement {
	return (
		<div>
			<img src='https://via.placeholder.com/380x450' alt='' />

			<div className='flex justify-between text-xl font-normal'>
				<span>{name}</span>
				<span>cost</span>
			</div>
		</div>
	);
}

export default Item;
