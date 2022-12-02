const express = require('express');
const fs = require('fs');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

/**
 * Function - For any other request, serve HTML in DIT environment (cloud env)
 * 
 * properties required for serving HTML in DIT environment..
 * 
 * @param {*Object} application - Name of the express application
 * @param {*Object} rootDirectory - Root directory of the file
 * @param {*Object} filePath - File path that is to be served...
 */
exports.build = function(properties){
  if (NODE_ENV === 'DIT') {
    const indexHTMLContent = fs.readFileSync(
      path.join(properties.rootDirectory + properties.filePath),
      'utf8'
    );
    properties.application.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
  }
}

/**
 * Function that is used for serving built static cs/jss files..
 * 
 * properties required for serving built static js/css files are sent as objects
 * 
 * @param {*Object} folderName - Name of the folder that is to be served..
 * @param {*Object} application - Name of the express application
 * @param {*Object} rootDirectory - Root directory of the file
 * @param {*Object} filePath - File path that is to be served...
 */

exports.builtStaticFiles = function(properties){
  properties.application.use(
    properties.folderName,
    express.static(path.join(properties.rootDirectory + properties.filePath))
  );
}