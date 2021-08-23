import Link from 'next/link';
import React, { CSSProperties, ReactElement } from 'react';

interface Props {}

const sections = [
	{
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		id: 1
	},
	{
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		id: 2
	},
	{
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		id: 3
	},
	{
		title: 'womens',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		size: 'large',
		id: 4,
		large: true
	},
	{
		title: 'mens',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		size: 'large',
		id: 5,
		large: true
	}
];

function HomePage({}: Props): ReactElement {
	return (
		<main>
			<div className='flex flex-wrap justify-between gap-3'>
				{sections.map(({ id, title, imageUrl, large }) => (
					<Link href={`/shop/${title}`} key={id}>
						<div
							className={`shop-category ${large && 'large'}`}
							style={{ '--background': `url(${imageUrl})` } as CSSProperties}
						>
							<div className='bg-gray-200 bg-opacity-80 p-3 text-center'>
								<h1 className='font-bold mb-2 text-2xl text-gray-600 uppercase'>
									{title}
								</h1>

								<span className='font-light text-base'>SHOP NOW</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</main>
	);
}

export default HomePage;
