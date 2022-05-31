import { useSession, signOut, getSession } from "next-auth/react";
import { useEffect } from "react";

export const Index = ({ session }) => {
	const { data } = useSession();
	useEffect(() => {
		console.log(data);
	});
	return (
		<>
			<button onClick={() => signOut()}>Signout</button>
		</>
	)
}

export async function getServerSideProps(context) {
	const session = await getSession(context);
	
	if(!session) {
		return {
			redirect: {
				destination: '/signin',
				permanent: false
			}
		}
	}

	return {
		props: {
			session
		}
	}
}

export default Index;
