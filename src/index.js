import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  return '今日は晴天なりおはようー';
});

export const handler = resolver.getDefinitions();