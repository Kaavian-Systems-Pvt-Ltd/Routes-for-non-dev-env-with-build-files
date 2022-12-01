const express = require('express');
const fs = require('fs');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

// Module - For any other request, serve HTML in DIT environment (cloud env)

/**
 * Function that is used for serving HTML in DIT environment..
 * @param {*Object{application: , rootDirectory: , filePath: }} properties 
 * properties required for serving built static js/css files are sent as objects,
 * Such as Name of the express application, 
 * root directory of the file and the file path that is to be served...
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
 * @param {*Object{application: , folderName: , rootDirectory: , filePath: }} properties 
 * properties required for serving built static js/css files are sent as objects,
 * Such as Name of the express application, Name of the folder that is to be served, 
 * root directory of the file and the file path that is to be served...
 */
// Module for serving built static js/css files
exports.builtStaticFiles = function(properties){
  properties.application.use(
    properties.folderName,
    express.static(path.join(properties.rootDirectory + properties.filePath))
  );
}