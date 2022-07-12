import _ from 'lodash';

const paths = {
  LOGIN: '/',
  HOME: '/home',
  STATS: '/stats',
  FOLLOWING: '/following',
  TROPHIES: '/trophies',
  SEARCH: '/search',
  GAME_TROPHIES: `/game/:communicationId/category/:category/trophies`,
  GAME_TROPHY: '/game/:communicationId/category/:category/trophy/:trophyId',
};

export const routes = {
  LOGIN: { path: paths.LOGIN },
  HOME: { path: paths.HOME },
  STATS: { path: paths.STATS },
  FOLLOWING: { path: paths.FOLLOWING },
  TROPHIES: { path: paths.TROPHIES },
  SEARCH: { path: paths.SEARCH },
  GAME_TROPHIES: {
    path: paths.GAME_TROPHIES,
    build: (communicationId: string, category: string) =>
      build(paths.GAME_TROPHIES, { communicationId, category }),
    // back: paths.HOME,
  },
  GAME_TROPHY: {
    path: paths.GAME_TROPHY,
    build: (communicationId: string, category: string, trophyId: number) =>
      build(paths.GAME_TROPHY, { communicationId, category, trophyId }),
  },
};

const build = (
  path: string,
  params: { [key: string]: string | number } = {}
) => {
  _.forEach(_.keys(params), (key) => {
    path = path.replace(`:${key}`, `${params[key]}`);
  });
  return path;
};

export const getBackPath = (path: string): string | undefined => {
  let backPath: string | undefined = undefined;
  _.forEach(_.keys(routes), (key: string) => {
    if (!backPath) {
      // @ts-ignore
      const chunk1 = _.split(routes[key]?.path, '/');
      const chunk2 = _.split(path, '/');
      // same size?
      if (chunk1.length === chunk2.length) {
        let allMatch = true;
        _.forEach(chunk1, (c, i) => {
          if (!_.includes(c, ':')) {
            if (allMatch && c !== chunk2[i]) allMatch = false;
          }
        });

        if (allMatch) {
          // @ts-ignore
          backPath = routes[key]?.back;
        }
      }
    }
  });

  return backPath;
};
