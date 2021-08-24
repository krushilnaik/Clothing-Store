import React, { ReactElement } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

interface Props {}

function Header({}: Props): ReactElement {
	return (
		<header className='flex flex-row items-center justify-between'>
			<Link href='/'>LOGO</Link>

			<ul className='flex flex-row justify-between gap-12'>
				<NavLink link='/shop' text='Shop' />
				<NavLink link='/contact' text='Contact' />
				<NavLink link='/signIn' text='Sign In' />
				<button>Cart</button>
			</ul>
		</header>
	);
}

export default Header;
