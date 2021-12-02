import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import ApolloContext, { initApollo } from "./context/dbContext";
import { ApolloProvider } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const client = initApollo();

  const App = (
    <ApolloProvider client={client}>
      <RemixServer context={remixContext} url={request.url} />
    </ApolloProvider>
  );

  return getDataFromTree(App).then(() => {
    const initialState = client.extract();

    const markup = renderToString(
      <ApolloContext.Provider value={initialState}>
        {App}
      </ApolloContext.Provider>
    );

    responseHeaders.set("Content-Type", "text/html");

    return new Response("<!DOCTYPE html>" + markup, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  });
}