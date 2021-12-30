// import appStyleUrl from '~/styles/css/app.css';
// import coreStyleUrl from '~/styles/css/core.css';

import styles from "./tailwind.css";
import { Links, LiveReload, Outlet, Scripts, Meta, useCatch } from "remix";

import Error from '~/components/error';

export let links = () => {    
    return [
        { rel: "stylesheet", href: styles },
    ];
};

export function CatchBoundary() {
	const caught = useCatch();
	return (
	  <html>
			<head>
				<title>Oops!</title>
				<Meta />
				<Links />
			</head>
			<body>
				<Error code={caught.status} text={caught.statusText}/>
		  		<Scripts />
			</body>
	  	</html>
	);
}

export default function App() {
  	return (
    	<html lang="en" className="dark">
      	<head>
        	<Meta />
			<Links />
      	</head>
      	<body className={`body-bg min-h-screen`}>
        	<Outlet />
        	{process.env.NODE_ENV === "development" ? (<LiveReload />) : null}
			<Scripts />
      	</body>
    </html>
  );
}