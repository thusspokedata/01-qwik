import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const pokemonId = useSignal<number>(10); // primitivos, strings booleans
  // const pokemonStore = useStore() // arrays, objects
  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>
      
      <div class="mt-2">
        <button class="btn btn-primary mx-1">Anterior</button>
        <button class="btn btn-primary mx-1">Siguientes</button>
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
