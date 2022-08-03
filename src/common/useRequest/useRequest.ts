import { useQuery } from '@tanstack/react-query';
import { GraphQLClient, gql } from 'graphql-request';
import { parseApiResponse } from 'modules/document/dataTransform';
import { UIDocument } from 'modules/document/types';

const API_URL = 'https://graphql.sketch.cloud/api';

const graphQLClient = new GraphQLClient(API_URL);

export function useGetDocument(id: string) {
  return useQuery<UIDocument, Error>(
    ['document', id],
    async (): Promise<UIDocument> => {
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
      return parseApiResponse(share);
    }
  );
}
