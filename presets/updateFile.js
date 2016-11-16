/**
 * @since 2016-11-15 20:44
 * @author vivaxy
 */

import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';

export default (options) => {

    const {
        project,
        scaffold,
    } = options;

    return (filename, filter) => {

        const sourceFolder = scaffold.folder;
        const distFolder = project.folder;

        // console.log(`updating ${filename}...`);
        const sourceFilename = path.join(sourceFolder, filename);
        const distFilename = path.join(distFolder, filename);
        const sourceData = fs.readFileSync(sourceFilename, 'utf8');
        const distData = filter(sourceData);
        fse.outputFileSync(distFilename, distData);
    };
};