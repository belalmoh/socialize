import appStyleUrl from '~/styles/css/app.css';
import coreStyleUrl from '~/styles/css/core.css';
import { Links, LiveReload, Outlet, Scripts } from "remix";

export let links = () => {    
    return [
        { rel: "stylesheet", href: appStyleUrl },
        { rel: "stylesheet", href: coreStyleUrl },
    ];
};

export default function App() {
  	return (
    	<html lang="en">
      	<head>
        	<meta charSet="utf-8" />
        	<title>Remix: So great, it's funny!</title>
			<Links />
      	</head>
      	<body className={`is-dark`}>
        	<Outlet />
        	{process.env.NODE_ENV === "development" ? (<LiveReload />) : null}
			<Scripts />
      	</body>
    </html>
  );
}