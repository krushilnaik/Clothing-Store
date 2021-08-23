import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {}

function Header({}: Props): ReactElement {
	return (
		<header className='flex flex-row justify-between items-center'>
			<Link href='/'>LOGO</Link>

			<ul className='flex flex-row justify-between gap-12'>
				<li className='link'>
					<Link href='/shop'>Shop</Link>
				</li>
				<li className='link'>
					<Link href='/contact'>Contact</Link>
				</li>
				<li className='link'>
					<Link href='/signIn'>Sign In</Link>
				</li>
				<button>Cart</button>
			</ul>
		</header>
	);
}

export default Header;
