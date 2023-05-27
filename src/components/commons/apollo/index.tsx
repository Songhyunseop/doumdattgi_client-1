import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable
} from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const recoilValueLoadable = useRecoilValueLoadable(
    restoreAccessTokenLoadable
  );

  useEffect(() => {
    void recoilValueLoadable.toPromise().then(newAccessToken => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const uploadLink = createUploadLink({
    uri: "https://doumdattgi-server.com/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Apollo-Operation-Name": "true"
    },
    credentials: "include"
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (typeof graphQLErrors !== "undefined") {
      for (let err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then(newAccessToken => {
              setAccessToken(newAccessToken ?? "");
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`
                }
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const client = new ApolloClient({
    uri: "https://doumdattgi-server.com/graphql",
    cache: GLOBAL_STATE,
    link: ApolloLink.from([errorLink, uploadLink])
  });

  // prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
