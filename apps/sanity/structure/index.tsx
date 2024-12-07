import type { StructureResolver } from 'sanity/structure'
import { createSingleton } from '../utils/create-singleton'
import { createCollection } from '../utils/create-collection';

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      createSingleton(S, "global"),
      createSingleton(S, "redirects"),
      S.divider(),
      createSingleton(S, "Index_Page"),
      S.divider(),
      createCollection(S, "Faq_Collection"),
    ])
