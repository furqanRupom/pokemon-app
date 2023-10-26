import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => "/pokemon",
    }),
    getSpecificPokemon : builder.query({
        query:(name) => `/pokemon/${name}`
    }),
    setNewPokemon : builder.mutation({
        query:(post)=>({
         url:'/pokemon',
         method:'POST',
         body:post
        })
    })
  }),
});


export const {useGetPokemonQuery,useGetSpecificPokemonQuery,useSetNewPokemonMutation} = baseApi
