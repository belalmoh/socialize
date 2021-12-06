import { Link } from 'remix';
import Input from '~/components/input';
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
        <div className={`bg-gradient-to-r from-blue-500 via-purple-600 to-purple-800 h-screen py-28`}>
            <header className="max-w-lg mx-auto">
                <Link to="/">
                    <h1 className="text-4xl font-bold text-white text-center">Socialize</h1>
                </Link>
            </header>
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section className="mt-10">
                    <form className="flex flex-col" method="POST" action="#">
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
                            <Input type="text" id="email" autoComplete={'none'} />
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Recover my account</button>
                    </form>
                </section>
            </main>
        </div>
    );
};