import { useLoaderData } from 'remix';

import Signin from './signin';

import { userCookies } from '~/utils/cookies';

// CatchBoundary and ErrorBoundary

export async function loader ({ request }) {
    const cookieHeader = request.headers.get('cookie');
    const cookie = userCookies.parse(cookieHeader);

    // 1- verify jwt on the server side

    return cookie;
}

export default function App() {
    const data = useLoaderData();

    console.log(data);

    return (
        <Signin />
    );
};