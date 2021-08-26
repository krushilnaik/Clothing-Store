import React, { ReactElement, useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';

interface Props {}

function SignUpForm({}: Props): ReactElement {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const testPassword = (test: string) => {
		return test === password;
	};

	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();

		setEmail('');
		setPassword('');
	};

	return (
		<div className='flex flex-col w-96'>
			<h2 className='text-xl'>I don't have an account</h2>
			<span className='font-extralight'>Sign up with your email and password</span>

			<form className='' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					onChange={(event) => setName(event.target.value)}
					label='Display Name'
					value={name}
					name='name'
					required
				/>

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

				<FormInput
					type='password'
					onChange={(event) => testPassword(event.target.value)}
					label='Password'
					value={password}
					name='password'
					required
				/>

				<Button>Sign up</Button>
			</form>
		</div>
	);
}

export default SignUpForm;
