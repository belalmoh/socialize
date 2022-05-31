import Head from 'next/head';
import { SessionProvider } from 'next-auth/react'
// import './styles.scss';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<Head>
				<title>Welcome to socialize!</title>
			</Head>
			<main className="app">
				<SessionProvider session={session}>
					<Component {...pageProps} />
				</SessionProvider>
			</main>
		</>
	);
}

export default CustomApp;
