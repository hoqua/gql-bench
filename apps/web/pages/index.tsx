import styled from 'styled-components';
import {
  createClient,
  defaultExchanges,
  Provider,
  subscriptionExchange,
  useSubscription,
} from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
import { FC } from 'react';

const isClient = typeof window !== 'undefined';
const wsClient = isClient
  ? createWSClient({
      url: 'ws://localhost:4000/graphql',
    })
  : null;

const client = isClient
  ? createClient({
      url: '/graphql',
      exchanges: [
        ...defaultExchanges,
        subscriptionExchange({
          forwardSubscription: (operation) => ({
            subscribe: (sink) => {
              console.log(operation, sink)
              return {
                unsubscribe: wsClient.subscribe(operation, sink),
              }
            },
          }),
        }),
      ],
    })
  : null;

const StyledPage = styled.div`
  .page {
  }
`;

const commentAdded = `
subscription CommentAdded($id: Int!) {
  commentAdded(id: $id) {
    text
  }
}
`;

export const withApi = (Component: FC) => {
  return function ApiWrappedComponent({ ...properties }) {
    return (
      <Provider value={client}>
        <Component {...properties} />
      </Provider>
    );
  };
};

const handleSubscription = (messages = [], response) => {
  console.log(response);
  return [response.commentAdded.text, ...messages];
};

export function Index() {
  const [res] = useSubscription(
    { query: commentAdded, variables: { id: 1 }, pause: !isClient },
    handleSubscription
  );

  if (!res.data) {
    return <p>No new messages</p>;
  }

  return (
    <StyledPage>
      <ul>
        {res.data.map((message) => (
          <p key={message}>{message}</p>
        ))}
      </ul>
    </StyledPage>
  );
}

export default withApi(Index);
