import React, { ReactElement } from 'react';

interface Props {
	title: string;
	imageUrl: string;
	// size: string;
	id: number;
	linkUrl: string;
	large?: boolean;
}

function MenuItem({ title, imageUrl, id, linkUrl, large = false }: Props): ReactElement {
	return (
		<div
			style={{ backgroundImage: `url(${imageUrl})` }}
			className={`menu-item ${large && 'large'}`}
		>
			<div>
				<h1 className='font-bold mb-2 text-2xl text-gray-600 uppercase'>{title}</h1>
				<span className='font-light text-base'>SHOP NOW</span>
			</div>
		</div>
	);
}

export default MenuItem;
