import React, { ReactElement, useState } from 'react';

interface Props {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	label: string;
	value: string;
	required: boolean;
	name: string;
	type: string;
}

function FormInput({ label, ...otherProps }: Props): ReactElement {
	const [shrink, setShrink] = useState(otherProps.value.length > 0);

	return (
		<div className='relative flex w-full my-12 border-b border-gray-400'>
			<input
				{...otherProps}
				className='w-full p-1 pl-1 text-lg bg-transparent'
				onFocus={() => setShrink(true)}
				onBlur={() => !otherProps.value.length && setShrink(false)}
			/>
			<label
				className={`absolute top-0 left-0 text-base text-gray-400 font-thin transition-all ${
					shrink && 'shrink'
				}`}
			>
				{label ?? ''}
			</label>
		</div>
	);
}

export default FormInput;
