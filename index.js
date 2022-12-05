const express = require('express');
const fs = require('fs');
const path = require('path');

/**
 * Function - For any other request, serve HTML in DIT environment (cloud env).
 * 
 * properties required for serving HTML in DIT environment are sent as objects
 * 
 * @param {{* application: app, rootDirectory: 'root directory path', filePath: 'path of the file' }}
 * @returns the html file to be served in DIT environment
 */
exports.build = function(propertyKey){
  const app = propertyKey.application;
  const rootDirectory = propertyKey.rootDirectory;
  const filePath = propertyKey.filePath;

  try {
    const indexHTMLContent = fs.readFileSync(
      path.join(rootDirectory + filePath),
      'utf8'
    );
    app.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
  } catch(error) {
    app.use((req, res, next) => (
      res.status(500).send('Something went wrong!')
    ))
  }
}

/**
 * Function that is used for serving built static cs/jss files.
 * 
 * properties required for serving built static js/css files are sent as objects
 * 
 * @param {{* application: app, folderName: 'name of the folder', rootDirectory: 'root directory path', filePath: 'path of the file'}}
 * @returns the built static cs/jss files that is to be served
 */

exports.builtStaticFiles = function(propertyKey){
  const app = propertyKey.application;
  const folderName = propertyKey.folderName;
  const rootDirectory = propertyKey.rootDirectory;
  const filePath = propertyKey.filePath;
  
  try {
    app.use(
      folderName,
      express.static(path.join(rootDirectory + filePath))
    );
  } catch(error) {
      app.use((req, res, next) => (
        res.status(500).send('Something went wrong!')
      ));
  }
}