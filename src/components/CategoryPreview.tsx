import React, { ReactElement } from 'react';
import Link from 'next/link';
import Item from './Item';
interface Props {
	id: number;
	title: string;
	routeName: string;
	items: Item[];
}

interface Item {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}

function CategoryPreview({ title, items, routeName }: Props): ReactElement {
	return (
		<div className='py-4'>
			<Link href={`/${routeName}`} passHref>
				<a className='text-3xl font-normal transition-colors duration-200 hover:text-red-300'>
					{title}
				</a>
			</Link>
			<div className='flex flex-row justify-between'>
				{items.slice(0, 4).map((item) => (
					<Item {...item} key={item.id} />
				))}
			</div>
		</div>
	);
}

export default CategoryPreview;
