import { Input } from '@socialize-ui';
import { getProviders, getCsrfToken, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

import SigninProviders from '../../components/providers';

const Logo = (props) => {
    return (
        <svg {...props} version="1.0" width="341.333" height="341.333" viewBox="0 0 256 256"><path d="M51.6 77.5c-7.4 1.9-17.7 7.3-23.8 12.5-16 13.8-21.3 37-12.6 55.2 8.8 18.3 26.2 29.3 46.3 29.2 18.2-.1 33.5-6.7 48-20.6 7-6.7 8.7-8.9 7.8-9.8-.9-1-2.6.1-7.7 4.6-22.2 19.9-47.9 24.8-67.9 13.1-6.7-4-15.2-13.7-17.7-20.4-3.1-8.3-2.5-20.5 1.4-28.2 3.8-7.4 10.7-13.8 19.6-18 6.7-3.2 8.3-3.6 15.5-3.5 9.8.1 17.3 2.6 26.7 9 8.7 5.9 21.4 19.4 30.3 32 18.9 26.9 41.9 43.2 65.6 46.7 27.3 3.9 53.8-12.8 60.4-38 4.4-16.7-.1-32.8-12.5-45.4-20-20.2-50.2-21.2-76.5-2.5-6 4.4-17.5 15.9-17.5 17.6 0 2.4 2.1 1.4 7.1-3.2 12.2-11.3 25.5-18 39.6-19.8 14.5-1.9 28 2.6 37.9 12.4 19.2 19.3 12.8 49.7-12.8 59.9-7 2.7-20.1 2.9-27.5.4-14.4-5-30.6-19.6-45.6-40.9-13.5-19.2-33-34.3-52.2-40.4-10.1-3.2-23.5-4-31.9-1.9z" /></svg>
    )
}

export const Index = ({ providers, csrfToken }) => {
    const [email, setEmail] = useState('');

    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-8 lg:px-8 h-screen bg-gray-100">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Logo className={`mx-auto fill-primary-600 h-28`} />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Authenticate your account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" method="POST" action="/api/auth/signin/email">
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                            <Input.Email label='Email Address' type='email' variant='primary' name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                            <div className="flex items-center justify-center">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                    onClick={() => signIn("email", {email})}
                                >
                                    Sign in passwordless
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className={`mt-6 grid grid-cols-2 gap-2`}>
                                <SigninProviders providers={providers}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async (context) => {
    const providers = await getProviders();
    const csrfToken = await getCsrfToken();
    return {
        props: {
            providers: Object.values(providers),
            csrfToken
        }
    }
}

export default Index;
