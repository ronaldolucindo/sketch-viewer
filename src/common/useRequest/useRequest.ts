import { useQuery } from '@tanstack/react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = 'https://graphql.sketch.cloud/api';

const graphQLClient = new GraphQLClient(API_URL);

export function useGetDocument(id: string) {
  return useQuery<Document, Error>(['document', id], async () => {
    const { share } = await graphQLClient.request(
      gql`
        {
          share(id: "${id}") {
            identifier
            version {
              document {
                name
                artboards {
                  entries {
                    name
                    identifier
                    files {
                      url
                      height
                      width
                      scale
                      thumbnails {
                        type
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
    );
    return share;
  });
}
