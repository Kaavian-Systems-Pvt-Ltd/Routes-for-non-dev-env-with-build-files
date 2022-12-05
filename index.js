const express = require('express');
const fs = require('fs');
const path = require('path');

/**
 * Function - For any other request, serve HTML in DIT environment (cloud env).
 * 
 * properties required for serving HTML in DIT environment are sent as objects
 * 
 * @param {*application} Name of the express application
 * @param {*rootDirectory} of the file
 * @param {*filePath} path of the file from root directory
 * @returns the html file to be served in DIT environment
 */
exports.build = function(propertyKey){
  const app = propertyKey.application;
  const rootDirectory = propertyKey.rootDirectory;
  const filePath = propertyKey.filePath;

  const indexHTMLContent = fs.readFileSync(
    path.join(rootDirectory + filePath),
    'utf8'
  );
  app.all('*', (req, res) => {
    res.send(indexHTMLContent);
  });
}

/**
 * Function that is used for serving built static cs/jss files.
 * 
 * properties required for serving built static js/css files are sent as objects
 * 
 * @param {*folderName} that is to be served
 * @param {*application} - Name of the express application
 * @param {*rootDirectory} of the file that is to be served
 * @param {*filePath} path of the file from root directory
 * @returns the static file to be served in DIT environment
 */

exports.builtStaticFiles = function(propertyKey){
  const app = propertyKey.application;
  const folderName = propertyKey.folderName;
  const rootDirectory = propertyKey.rootDirectory;
  const filePath = propertyKey.filePath;
  
  app.use(
    folderName,
    express.static(path.join(rootDirectory + filePath))
  );
}