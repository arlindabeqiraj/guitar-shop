// src/lib/apollo/client.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
  "https://graphql-api-brown.vercel.app/api/graphql";

export function makeApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV !== "production",
    defaultOptions: {
      watchQuery: { fetchPolicy: "cache-and-network" },
      query: { fetchPolicy: "network-only" },
    },
  });
}
