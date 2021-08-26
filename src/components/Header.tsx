import React, { ReactElement } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

interface Props {}

function Header({}: Props): ReactElement {
	return (
		<header className='flex flex-row items-center justify-between px-2'>
			<Link href='/'>LOGO</Link>

			<ul className='flex flex-row justify-between gap-16 text-lg'>
				<NavLink link='/shop' text='Shop' />
				<NavLink link='/contact' text='Contact' />
				<NavLink link='/sign-in' text='Sign In' />

				<button>Cart</button>
			</ul>
		</header>
	);
}

export default Header;
