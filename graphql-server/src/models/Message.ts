import { builder } from '../builder';

builder.prismaObject('Message', {
  fields: (t) => ({
    id: t.exposeID('id'),
    body: t.exposeString('body'),
    createdAt: t.expose('createdAt', {
      type: 'Date',
    }),
  }),
});

/*

type User {
    id: ID!
    body: string!
    createdAt: Date!
}
*/
