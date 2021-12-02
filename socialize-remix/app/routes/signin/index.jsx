import { useQuery, gql } from '@apollo/client';
import {User, Lock} from 'react-feather';
import { Link } from 'remix';

import LoginDarkImage from '~/img/signin/login-dark.svg';

import SigninStyle from '~/styles/css/signin/signin.css';

// CatchBoundary and ErrorBoundary

export const meta = () => {
    return {
        title: "Signin"
    };
};

export function links() {    
    return [
        { rel: "stylesheet", href: SigninStyle },
    ];
};

const CHARACTERS_QUERY = gql`
    query ExampleQuery {
        Users {
            id
            firstName
            lastName
            email
        }
    }
`;

export default function App() {
    const {data} = useQuery(CHARACTERS_QUERY);
    console.log(data);
    return (
        <Signin />
    );
}
 
const Signin = () => {
    return (
        <div className="signup-wrapper">

            <div className="container">
                <div className="login-container">
                    <div className="columns is-vcentered">
                        <div className="column is-6 image-column">
                            <img className="dark-image login-image" src={LoginDarkImage} alt="" />
                        </div>
                        <div className="column is-6">

                            <h2 className="form-title">Welcome Back</h2>
                            <h3 className="form-subtitle">Enter your credentials to sign in.</h3>

                            <div className="login-form">
                                <div className="form-panel">
                                    <div className="field">
                                        <label>Email</label>
                                        <div className="control">
                                            <input type="text" className="input" placeholder="Enter your email address" />
                                            <div className="input-icon">
                                                <User />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <div className="control">
                                            <input type="password" className="input" placeholder="Enter your password" />
                                            <div className="input-icon">
                                                <Lock />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field is-flex">
                                        <div className="switch-block">
                                            <label className="f-switch">
                                                <input type="checkbox" className="is-switch" />
                                                <i></i>
                                            </label>
                                            <div className="meta">
                                                <p>Remember me?</p>
                                            </div>
                                        </div>
                                        <Link to="/forgot-password">Forgot password</Link>
                                    </div>
                                </div>

                                <div className="buttons">
                                    <a className="button is-solid primary-button is-fullwidth raised">Login</a>
                                </div>

                                <div className="account-link has-text-centered">
                                    <Link to="/signup">Don't have an account? Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};