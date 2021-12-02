import { createContext } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const isBrowser = typeof window !== "undefined";

const initialState = isBrowser ? window.__INITIAL_STATE__ : {};

export function initApollo(ssrMode = true) {
    return new ApolloClient({
        uri: "http://localhost:4000",
        cache: new InMemoryCache().restore(initialState),
        ssrMode,
    });
}

export default createContext(initialState);