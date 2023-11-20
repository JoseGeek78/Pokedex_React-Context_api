import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {

  // Llamar 50 pokemones de la API

  const getAllPokemons = async (limit = 50) => {
		
	};

  return (
    <PokemonContext.Provider
      value={{
        numero: 0,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
