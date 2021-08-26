import React, { ReactElement } from 'react';
import CategoryPreview from '../../components/CategoryPreview';

import SHOP_DATA from '../../data/ShopData';

interface Props {}

function ShopPage({}: Props): ReactElement {
	return (
		<main>
			<h1 className='text-4xl'>Collections</h1>
			{SHOP_DATA.map((category) => (
				<CategoryPreview key={category.id} {...category} />
			))}
		</main>
	);
}

export default ShopPage;
