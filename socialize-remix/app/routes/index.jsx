import { useLoaderData, redirect } from 'remix';
import { userCookies } from '~/utils/cookies';
import { validateToken } from '~/models/user'

import Header from '~/components/header';

export async function loader ({ request }) {
    const cookieHeader = request.headers.get('cookie');
    const cookie = await userCookies.parse(cookieHeader);
    
    if(cookie?.token) {
        const isValidToken = await validateToken(cookie.token);
        if(isValidToken.data.IsValidToken) {
            return null;
        }
    }
    return redirect("/signin");
}

export default function App() {
    const data = useLoaderData();

    return (
        <Header />
    );
};