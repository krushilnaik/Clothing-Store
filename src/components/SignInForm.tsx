import React, { ReactElement, useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';

interface Props {}

function SignInForm({}: Props): ReactElement {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();

		setEmail('');
		setPassword('');
	};

	return (
		<div className='flex flex-col w-96'>
			<h2 className='text-xl'>I already have an account</h2>
			<span className='font-extralight'>Sign in with your email and password</span>

			<form className='' onSubmit={handleSubmit}>
				<FormInput
					type='email'
					onChange={(event) => setEmail(event.target.value)}
					label='Email'
					value={email}
					name='email'
					required
				/>

				<FormInput
					type='password'
					onChange={(event) => setPassword(event.target.value)}
					label='Password'
					value={password}
					name='password'
					required
				/>

				<Button>Sign in</Button>
			</form>
		</div>
	);
}

export default SignInForm;
