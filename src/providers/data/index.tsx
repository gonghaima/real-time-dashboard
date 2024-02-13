import { GraphQLClient } from '@refinedev/nestjs-query';
import { fetchWrapper } from './fetch-wrapper';

export const API_BASE_URL = 'https://api.crm.refine.dev';
export const API_URL = API_BASE_URL + '/graphql';

export const client = new GraphQLClient(API_URL, {
  fetch: (url: string, options: RequestInit) => {
    try {
      return fetchWrapper(url, options);
    } catch (error) {
      return Promise.reject(error as Error);
    }
  },
});
