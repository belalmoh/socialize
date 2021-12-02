import { Link } from 'remix';
// CatchBoundary and ErrorBoundary

export const meta = () => {
    return {
        title: "Signup"
    };
};

export default function App() {
    return (
        <Signup />
    );
}
 
const Signup = () => {
    return (
        <div className="signup-wrapper">
            <div className="container">
                
                <div className="login-container is-centered">
                    <div className="columns is-vcentered">
                        <div className="column">

                            <h2 className="form-title has-text-centered">Hey there!</h2>
                            <h3 className="form-subtitle has-text-centered">Lets create your account.</h3>

                            <div className="login-form">
                                <div className="form-panel">
                                    <div className="columns is-multiline">
                                        <div className="column is-6">
                                            <div className="field">
                                                <label>First Name</label>
                                                <div className="control">
                                                    <input type="text" className="input" placeholder="Enter your first name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-6">
                                            <div className="field">
                                                <label>Last Name</label>
                                                <div className="control">
                                                    <input type="text" className="input" placeholder="Enter your last name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-12">
                                            <div className="field">
                                                <label>Email</label>
                                                <div className="control">
                                                    <input type="text" className="input" placeholder="Enter your email address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-12">
                                            <div className="field">
                                                <label>Password</label>
                                                <div className="control">
                                                    <input type="password" className="input" placeholder="Enter your password" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="buttons mt-6">
                                    <a className="button is-solid primary-button is-fullwidth raised">Create Account</a>
                                </div>

                                <div className="account-link has-text-centered">
                                    <Link to="/signin">Have an account? Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};