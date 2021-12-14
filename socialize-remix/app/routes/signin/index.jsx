import { useState } from 'react';
import { Link, Form, useActionData, useTransition, redirect } from 'remix';

import FormField from '~/components/form-field';

import { loginUser } from '~/models/user';
import { userCookies, isLoggedIn } from '~/utils/cookies';

export async function loader ({request}) {
    if(isLoggedIn(request.headers.get('cookie'))) {
        return redirect("/");
    }
    return null;
}

export const action = async ({ request }) => {
    try {
        const formData = await request.formData();
      
        const email = formData.get("email");
        const password = formData.get("password");
        const result = await loginUser(email, password);
        return redirect('/', {
            headers: {
                "Set-Cookie": (await userCookies.serialize({...result.data.loginUser, isLoggedIn: true})) || {}
            }
        });
    } catch (error) {
        return {
            error: true,
            errorText: 'Invalid Credentials',
        }
    }
}

export const meta = () => {
    return {
        title: "Signin"
    };
};

export default function App() {
    return (
        <Signin />
    );
}

const Signin = () => {
    const actionData = useActionData();
    const transition = useTransition();

    const [invalidFields, setInvalidFields] = useState([]);

    const handleOnInvalid = (e) => {
        if(invalidFields.indexOf(e.target.name) === -1)
            setInvalidFields([...invalidFields, e.target.name]);
    }

    const handleOnChange = (e) => {
        let fields = invalidFields.filter(f => f !== e.target.name);
        setInvalidFields(fields);
    }

    return (
        <div className={`bg-gradient-to-r from-blue-500 via-purple-600 to-purple-800 h-screen py-28`}>
            <header className="max-w-lg mx-auto">
                <Link to="/">
                    <h1 className="text-4xl font-bold text-white text-center">Socialize</h1>
                </Link>
            </header>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to Socialize</h3>
                    <p className="text-gray-600 pt-2">Sign in to your account.</p>
                </section>

                <section className="mt-10">
                    <Form className="flex flex-col" method="POST">

                        <FormField 
                            label={`Email`} 
                            inputFieldProps={{
                                type:"email",
                                name:"email",
                                id:"email",
                                autoComplete:'off',
                                required: true,
                                onInvalid: handleOnInvalid,
                                onChange: handleOnChange,
                            }}
                            isInvalid={invalidFields.indexOf("email") !== -1}
                        />

                        <FormField 
                            label={`Password`} 
                            inputFieldProps={{
                                type:"password",
                                name:"password",
                                id:"password",
                                autoComplete:'off',
                                required: true,
                                onInvalid: handleOnInvalid,
                                onChange: handleOnChange,
                            }}
                            isInvalid={invalidFields.indexOf("password") !== -1}
                        />

                        <div className="flex justify-end">
                            <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</Link>
                        </div>

                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 h-14 flex justify-center items-center" type="submit">
                            {transition?.state === 'submitting' ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> : "Sign In"}
                        </button>
                    </Form>
                </section>
            </main>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">Don't have an account? <Link to="/signup" className="font-bold hover:underline">Sign up</Link>.</p>
            </div>
        </div>
    );
};