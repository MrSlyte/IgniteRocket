import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sw6g8g2nm801z39xu96kq0/master',
    cache: new InMemoryCache()
})