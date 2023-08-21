import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// import styles from '../../styles.css?inline';

export default component$(() => {
  // useStylesScoped$(styles);
  return <span>Hola mundo - Client</span>;
});

export const head: DocumentHead = {
  title: 'Client List',
  meta: [
    {
      name: 'description',
      content: 'Client List',
    },
  ],
};
