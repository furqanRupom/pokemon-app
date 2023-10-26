import React, { useState } from "react";
import {
  useGetPokemonQuery,
  useGetSpecificPokemonQuery,
  useSetNewPokemonMutation,
} from "../redux/features/api/baseApi";
import Header from "../components/Header";

const Home = () => {
  const { data, isLoading, refetch, isError, error } = useGetPokemonQuery();
  const [setNewPokemon,{data:newPost}] = useSetNewPokemonMutation();
  const [searchName, setSearchName] = useState("");
  const [post, setPost] = useState("");
  let pokemons = [];
  const { data: specificPokemon } = useGetSpecificPokemonQuery(searchName);

  if (specificPokemon?.name == undefined) {
    pokemons = data?.results;
  } else {
    pokemons = [specificPokemon];
  }




//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     setNewPokemon({name:post});


//   }

  return (
    <div>
      <Header />

      <input
        onChange={(e) => setSearchName(e.target.value)}
        className="text-xl w-9/12 my-12 max-w-full py-2 border-2 border-orange-200 rounded-2xl px-3 tex-gray-600 focus:outline-none outline-none"
        type="text"
        placeholder="Search here"
      />

      {/* <form onSubmit={handleSubmit} action="">
        <input
          onChange={(e) => setPost(e.target.value)}
          className="text-xl w-9/12 my-12 max-w-full py-2 border-2 border-orange-200 rounded-2xl px-3 tex-gray-600 focus:outline-none outline-none"
          type="text"
          placeholder="Search here"
        />
        <button type="submit" className="ml-3 px-5 py-2 rounded-lg shadow bg-amber-50">
            Post Now
        </button>
      </form> */}

      <section className="grid grid-cols-3 gap-y-10 mt-12">
        {pokemons?.map((pokemon) => (
          <div key={pokemon?.url || pokemon?.name}>
            <div className="flex flex-col items-center justify-center w-full max-w-xs mx-auto">
              <div className="w-full h-64  rounded-lg shadow-md">
                <img
                  className="w-full h-full"
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/images/${pokemon?.name}.jpg`}
                  alt=""
                />
              </div>

              <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                  {pokemon?.name}
                </h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                  <span className="font-bold text-gray-800 dark:text-gray-200">
                    $129
                  </span>
                  <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
