import { component$, useSignal, useTask$ } from '@builder.io/qwik';

interface Props {
  id: number;
  size?: string;
  backImage: boolean;
}

export const PokemonImage = component$(({ id, size = '196', backImage = false }: Props) => {
  const imageLoaded = useSignal(false);
  useTask$(({ track }) => {
    track(() => id);
    imageLoaded.value = false;
  });

  return (
    <div class="flex items-center justify-center" style={{ width: `${size}px`, height: `${size}px` }}>
      {!imageLoaded.value && <span> Loading...</span>}
      <img
        src={
          backImage
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }
        width={size}
        height="196"
        alt=""
        onLoad$={() => {
          //   setTimeout(() => {
          imageLoaded.value = true;
          //   }, 2000);
        }}
        class={{ hidden: !imageLoaded.value }}
      />
    </div>
  );
});