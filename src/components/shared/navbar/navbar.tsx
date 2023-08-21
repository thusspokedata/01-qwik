import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../../icons/qwik';
import styles from './navbar.module.css';

export default component$(() => {
  return (
    <header class={styles.navbar}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/" >
            <QwikLogo height={50} />
          </Link>
        </div>
        <ul>
          {/* <li>
            <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
              Docs
            </a>
          </li> */}
          <li>
            <Link href="/pokemons/list-ssr/">SSR - List</Link>
          </li>
          <li>
            <Link href="/pokemons/list-client/">Client</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
