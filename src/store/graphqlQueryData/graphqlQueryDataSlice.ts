import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { isStringHashTable } from '@utils/typeguards/is-string-hash-table';

export interface IGraphqlQueryDataState {
  url: string;
  query: string;
  headers: Record<string, string>;
  variables: Record<string, string>;
  response: string;
  schema: string;
}

const { actions, reducer } = createSlice({
  name: 'graphqlQueryData',
  initialState: (): IGraphqlQueryDataState => ({
    url: 'https://rickandmortyapi.graphcdn.app/',
    query: 'query($v:String){characters(filter:{name:$v}){results{name}}}',
    headers: {},
    variables: {},
    response: '',
    schema: '',
  }),
  reducers: {
    setGQLUrl(state, { payload }: PayloadAction<string>) {
      state.url = payload;
    },
    setGQLQuery(state, { payload }: PayloadAction<string>) {
      state.query = payload;
    },
    setGQLHeaders(state, { payload }: PayloadAction<string>) {
      try {
        const parsed = JSON.parse(payload) as unknown;
        state.headers = isStringHashTable(parsed) ? parsed : {};
      } catch (error) {
        state.headers = {};
      }
    },
    setGQLVariables(state, { payload }: PayloadAction<string>) {
      try {
        const parsed = JSON.parse(payload) as unknown;
        state.variables = isStringHashTable(parsed) ? parsed : {};
      } catch (error) {
        state.variables = {};
      }
    },
    setGQLResponse(state, { payload }: PayloadAction<string>) {
      state.response = payload;
    },
    setGQLSchema(state, { payload }: PayloadAction<string>) {
      state.schema = payload;
    },
  },
});

export const graphqlQueryDataReducer = reducer;
export const {
  setGQLUrl,
  setGQLQuery,
  setGQLHeaders,
  setGQLVariables,
  setGQLResponse,
  setGQLSchema,
} = actions;
