import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';

export default component$(() => {
  return (
    <>
      <Hero />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            CLI Commands
          </div>
          <>
            <p>
              <code>npm run dev</code>
              <br />
              Starts the development server and watches for changes
            </p>
            <p>
              <code>npm run preview</code>
              <br />
              Creates production build and starts a server to preview it
            </p>
            <p>
              <code>npm run build</code>
              <br />
              Creates production build
            </p>
            <p>
              <code>npm run qwik add</code>
              <br />
              Runs the qwik CLI to add integrations
            </p>
          </>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Example Apps
            </div>
            <p>
              Have a look at the <a href="/demo/flower">Flower App</a> or the{' '}
              <a href="/demo/todolist">Todo App</a>.
            </p>
          </Infobox>
          
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Ugly Front',
  meta: [
    {
      name: 'description',
      content: 'the ugly frontend page',
    },
  ],
};
