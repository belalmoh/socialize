import { useEffect, useState } from 'react';
import { Link, Form, useActionData, useTransition, redirect, createCookie } from 'remix';

import { createUser } from '~/models/user';

import FormField from '~/components/form-field';
import { ErrorAlert } from '~/components/alerts';

import { userCookies } from '~/utils/cookies';

export const meta = () => {
    return {
        title: "Signup"
    };
};

export const action = async ({ request }) => {
    const formData = await request.formData();
  
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordConfirm = formData.get("passwordConfirm");

    let result = {};
    
    if(password !== passwordConfirm) {
        return {
            error: true,
            errorText: 'Passwords are not matching'
        }
    }


    try {
        result = await createUser({firstName, lastName, email, password});
    } catch (error) {
        let hasEmailError = error?.graphQLErrors.filter((e) => {
            e.extensions.exception.meta.target === 'User_email_key'
        });
        
        if(hasEmailError.length){
            result = {
                error: true,
                errorText: 'Email already exists'
            }
        }
        return result;
    }

    // should redirect to /
    return redirect('/', {
        headers: {
            "Set-Cookie": (await userCookies.serialize({userToken: result.data.createUser.token, isLoggedIn: true})) || {}
        }
    });
};

export default function App() {
    return (
        <Signup />
    );
}
 
const Signup = () => {
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
        <div className={`bg-gradient-to-r from-blue-500 via-purple-600 to-purple-800 h-screen py-10`}>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to Socialize</h3>
                    <p className="text-gray-600 pt-2">Create new account</p>
                </section>

                {actionData?.error && <ErrorAlert label={`Error`} errorText={actionData.errorText}/>}

                <section className="mt-10">
                    <Form className="flex flex-col" method="POST">

                        <FormField
                            label={`First name`} 
                            inputFieldProps={{
                                type:"text",
                                name:"firstName",
                                id:"firstName",
                                autoComplete:'off',
                                required: true,
                                onInvalid: handleOnInvalid,
                                onChange: handleOnChange,
                            }}
                            isInvalid={invalidFields.indexOf("firstName") !== -1}
                        />

                        <FormField
                            label={`Last name`} 
                            inputFieldProps={{
                                type:"text",
                                name:"lastName",
                                id:"lastName",
                                autoComplete:'off',
                                required: true,
                                onInvalid: handleOnInvalid,
                                onChange: handleOnChange,
                            }}
                            isInvalid={invalidFields.indexOf("lastName") !== -1}
                        />
                        
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
                        
                        <FormField
                            label={`Repeat password`} 
                            inputFieldProps={{
                                type:"password",
                                name:"passwordConfirm",
                                id:"passwordConfirm",
                                autoComplete:'off',
                                required: true,
                                onInvalid: handleOnInvalid,
                                onChange: handleOnChange,
                            }}
                            isInvalid={invalidFields.indexOf("passwordConfirm") !== -1}
                        />
                        
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 h-14 flex justify-center items-center" type="submit">
                            {transition?.state === 'submitting' ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> : "Create your account"}
                        </button>
                    </Form>
                </section>
            </main>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">Already have an account? <Link to="/signin" className="font-bold hover:underline">Sign in</Link>.</p>
            </div>
        </div>
    );
};