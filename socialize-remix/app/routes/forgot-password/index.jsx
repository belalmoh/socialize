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

                            <h2 className="form-title has-text-centered">Password Recovery</h2>

                            <div className="login-form">
                                <div className="form-panel">
                                    <div className="columns is-multiline">
                                        <div className="column is-12">
                                            <div className="field">
                                                <label>Email</label>
                                                <div className="control">
                                                    <input type="text" className="input" placeholder="Enter your email address" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="buttons mt-6">
                                    <a className="button is-solid primary-button is-fullwidth raised">Reset Password</a>
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