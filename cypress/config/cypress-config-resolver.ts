import path from 'path';

import fs from 'fs-extra';

const cypressConfigResolverByFile = (filename: string) => {
  const pathToConfigFile = path.resolve(__dirname, `${filename}.json`);
  return fs.readJsonSync(pathToConfigFile);
};

export const cypressConfigResolver = () =>
  cypressConfigResolverByFile(process.env.CYPRESS_ENV || 'localhost');
