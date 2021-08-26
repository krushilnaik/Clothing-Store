import React, { ReactElement } from 'react';

interface Props {
	name: string;
	imageUrl: string;
	price: number;
}

function Item({ name, imageUrl, price }: Props): ReactElement {
	return (
		<div>
			<img src={imageUrl ?? 'https://via.placeholder.com/380x450'} alt='' />

			<div className='flex justify-between text-xl font-normal'>
				<span>{name}</span>
				<span>{price}</span>
			</div>
		</div>
	);
}

export default Item;
