const express = require('express');
const fs = require('fs');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

// For any other request, serve HTML in DIT environment (cloud env)
/**
 * 
 * @param {
 * } app 
 */
exports.build = function(properties){
  if (NODE_ENV === 'DIT') {
    const indexHTMLContent = fs.readFileSync(
      path.join(properties.filePath),
      'utf8'
    );
    properties.application.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
  }
}

// for serving built static js/css files
exports.builtStaticFiles = function(properties){
  properties.application.use(
    properties.folderName,
    express.static(path.join(properties.filePath))
  );
}