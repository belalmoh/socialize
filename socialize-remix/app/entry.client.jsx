import { ApolloProvider } from "@apollo/client";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { initApollo } from "~/context/dbContext";

function Client() {
  const client = initApollo(false);

  return (
    <ApolloProvider client={client}>
      <RemixBrowser />
    </ApolloProvider>
  );
}

hydrate(<Client />, document);