import * as d from '../../declarations';
import { createCompiler } from '@compiler';
import { startupLog } from './startup-log';
import { runPrerender } from '../../prerender/prerender-main';
import { startServer } from '@dev-server';
import { taskWatch } from './task-watch';


export async function taskBuild(prcs: NodeJS.Process, config: d.Config) {
  startupLog(prcs, config);

  if (config.flags.watch) {
    await taskWatch(prcs, config);
    return;
  }

  const compiler = await createCompiler(config);
  const results = await compiler.build();

  if (!results.hasError && config.flags.prerender) {
    const devServer = await startServer(config.devServer, config.logger);
    await runPrerender(prcs, __dirname, config, devServer, results);
    await devServer.close();
  }

  await compiler.destroy();
}
