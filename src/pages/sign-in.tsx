import React, { ReactElement } from 'react';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

interface Props {}

function SignInPage({}: Props): ReactElement {
	return (
		<main className='flex flex-row items-center justify-around'>
			<SignInForm />
			<SignUpForm />
		</main>
	);
}

export default SignInPage;
