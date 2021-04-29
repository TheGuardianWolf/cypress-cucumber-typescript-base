import fs from 'fs';

import glob from 'glob';

const CYPRESS_DIR = 'cypress/integration';
const GHERKIN_DIR = 'gherkin-features';

const getDirectories = (src: string, callback: Parameters<typeof glob>[2]) => {
  glob(`${src}/**/*.feature`, callback);
};

const isFileToDelete = (f: string) => {
  const filename = f.replace(CYPRESS_DIR, '');
  const gherkinFile = `${GHERKIN_DIR}${filename}`;
  const exists = fs.existsSync(gherkinFile);
  return !exists;
};

const deleteFile = (f: string) => {
  console.log('Deleting old feature file', f);
  fs.unlinkSync(f);
};

getDirectories(CYPRESS_DIR, (err, res) => {
  const filesToDelete = res.filter(isFileToDelete);
  filesToDelete.forEach(deleteFile);
});
