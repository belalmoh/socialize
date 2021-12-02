import Signin, {links as signinLinks} from './signin';

// CatchBoundary and ErrorBoundary

export const links = () => {
    return [...signinLinks()];
}

export default function App() {
    return (
        <Signin />
    );
};