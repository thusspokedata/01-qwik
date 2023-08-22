import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';

export const usePokemontList = routeLoader$(async () => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=10`);
  const data = await resp.json();
  console.log(data, 'data');
  return data;
});

export default component$(() => {
  const pokemonResp = usePokemontList();
  return (
    <>
      <div class="flex flex-col">
        <span class="my-5 text-5xl">Status</span>
        <span class="">Current offset: xxx</span>
        <span class="">Loading Page: xxx</span>
      </div>
      <div class="mt-10">
        <Link class="btn btn-primary mr-2">Previous</Link>
        <Link class="btn btn-primary mr-2">Next</Link>
      </div>
      <div class="grid grid-cols-6 mt-5">
        <div class="mt-5 flex flex-col justify-center items-center">Pokemon</div>
        <div class="mt-5 flex flex-col justify-center items-center">Pokemon</div>
        <div class="mt-5 flex flex-col justify-center items-center">Pokemon</div>
        <div class="mt-5 flex flex-col justify-center items-center">Pokemon</div>
        <div class="mt-5 flex flex-col justify-center items-center">Pokemon</div>
        <div class="mt-5 flex flex-col justify-center items-center">Pokemon</div>
        <div class="mt-5 flex flex-col justify-center items-center">Pokemon</div>
      </div>
      <div>
        {pokemonResp.value?.results.map((pokemon: any) => (
          <div class="mt-5 flex flex-col justify-center items-center">{pokemon.name}</div>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'SSR-List',
  meta: [
    {
      name: 'description',
      content: 'SSR List',
    },
  ],
};
