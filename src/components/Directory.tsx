import React, { ReactElement } from 'react';
import MenuItem from './MenuItem';

interface Props {}

const sections = [
	{
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		id: 1,
		linkUrl: 'shop/hats'
	},
	{
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		id: 2,
		linkUrl: 'shop/jackets'
	},
	{
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		id: 3,
		linkUrl: 'shop/sneakers'
	},
	{
		title: 'womens',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		size: 'large',
		id: 4,
		linkUrl: 'shop/womens',
		large: true
	},
	{
		title: 'mens',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		size: 'large',
		id: 5,
		linkUrl: 'shop/mens',
		large: true
	}
];

function Directory({}: Props): ReactElement {
	return (
		<div className='w-full flex flex-wrap justify-between'>
			{sections.map((props) => (
				<MenuItem key={props.id} {...props} />
			))}
		</div>
	);
}

export default Directory;
