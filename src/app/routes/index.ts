import express from 'express';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    route: require('./auth').default,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
