import Link from 'next/link';
import React, { ReactElement } from 'react';

interface Props {
	link: string;
	text: string;
}

function NavLink({ link, text }: Props): ReactElement {
	return (
		<li className='flex uppercase transition-colors duration-200 hover:text-red-300'>
			<Link href={link}>{text}</Link>
		</li>
	);
}

export default NavLink;
