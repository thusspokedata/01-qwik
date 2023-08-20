import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';

export default component$(() => {
  const pokemonId = useSignal<number>(10); // primitivos, strings booleans
  // const pokemonStore = useStore() // arrays, objects
  const showBackImage = useSignal<boolean>(false);

  // const showBackImage =$((value: boolen) {

  // }
  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });
  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage id={pokemonId.value} size={'196'} backImage={showBackImage.value} />

      <div class="mt-2">
        <button onClick$={() => changePokemonId(-1)} class="btn btn-primary mx-1">
          Anterior
        </button>
        <button onClick$={() => changePokemonId(1)} class="btn btn-primary mx-1 mr-2">
          Siguiente
        </button>
        <button onClick$={() => (showBackImage.value = !showBackImage.value)} class="btn btn-primary mx-1">
          Voltear
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'description',
      content: 'My first app using Qwik',
    },
  ],
};
