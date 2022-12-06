const fs = require('fs');
const path = require('path');

/**
 * Function - For any other request, serve HTML in DIT environment (cloud env).
 * 
 * properties required for serving HTML in DIT environment are sent as objects
 * 
 * @param {{* expressApplication: express(), rootDirectory: 'root directory path', filePath: 'path of the file' }}
 * @returns the html file to be served in DIT environment
 */
exports.build = function({ expressApplication, rootDirectory, filePath }){
  try {
    const indexHTMLContent = fs.readFileSync(
      path.join(rootDirectory + filePath),
      'utf8'
    );
    expressApplication.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
  } catch(error) {
    throw new Error(error);
  }
}

/**
 * Function that is used for serving built static cs/jss files.
 * 
 * properties required for serving built static js/css files are sent as objects
 * 
 * @param {{* expressApplication: express(), express: express, folderName: 'name of the folder', rootDirectory: 'root directory path', filePath: 'path of the file'}}
 * @returns the built static cs/jss files that is to be served
 */

exports.builtStaticFiles = function({ expressApplication, express, folderName, rootDirectory, filePath}) {
  try {
    expressApplication.use(
      folderName,
      express.static(path.join(rootDirectory + filePath))
   );
  } catch(error) {
     throw new Error(error);
  }
}