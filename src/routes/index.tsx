import { $, component$, useSignal } from '@builder.io/qwik';
import { type DocumentHead, useNavigate } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';

export default component$(() => {
  // The useNavigate() function allows to programmatically navigate to the next page without involving a user click or causing a full-page reload.
  const nav = useNavigate();
  const pokemonId = useSignal<number>(10); // primitivos, strings booleans
  const showBackImage = useSignal<boolean>(false);
  const showImage = useSignal<boolean>(false);
 
  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });

  const goToPokemon = $(() => {
    nav(`/pokemon/${pokemonId.value}/`);
  });
  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <button onClick$={() => goToPokemon()}>
        <PokemonImage id={pokemonId.value} size={'196'} backImage={showBackImage.value} isVisible={showImage.value} />
      </button>

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
        <button onClick$={() => (showImage.value = !showImage.value)} class="btn btn-primary mx-1">
          Revelar
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
