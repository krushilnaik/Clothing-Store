import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import Item from '../../components/Item';

interface Props {}

function CategoryPage({}: Props): ReactElement {
	const { category } = useRouter().query;

	return (
		<main>
			<h1 className='text-center text-5xl capitalize'>{category}</h1>
			<div className='flex flex-wrap justify-between gap-4 mt-10'>
				<Item name='1' />
				<Item name='2' />
				<Item name='3' />
				<Item name='4' />
				<Item name='5' />
				<Item name='6' />
				<Item name='7' />
				<Item name='8' />
			</div>
		</main>
	);
}

export default CategoryPage;
