import React, { ReactElement } from 'react';

interface Props {
	children: string | ReactElement | ReactElement[];
}

function Button({ children }: Props): ReactElement {
	return (
		<button
			className='text-white min-w-[165px] bg-black border-2 w-auto h-12 uppercase tracking-wide cursor-pointer hover:bg-white hover:text-black hover:border-black'
			type='submit'
		>
			{children}
		</button>
	);
}

export default Button;
