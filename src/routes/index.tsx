import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

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
            Commands
          </div>
          <Link href="/contact">contact</Link>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Products
            </div>
            <p>
              Have a look at the <a href="/random">Random Page</a>
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
