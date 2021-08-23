import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

interface Props {}

function CategoryPage({}: Props): ReactElement {
	const { category } = useRouter().query;

	return (
		<main className='placeholder'>
			<span>{`${category} page`}</span>
		</main>
	);
}

export default CategoryPage;
