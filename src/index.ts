import { envs } from './config';
import { Server } from './server';

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: Number(envs.PORT),
  });

  server.start();
}
