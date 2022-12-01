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
exports.build = function(app, rootDirectory, filePath){
  // const rootDirectory = properties.rootDirectory;
  // const filePath = properties.filePath;
  // const app = properties.application;

  console.log(app);
  if (NODE_ENV === 'DIT') {
    const indexHTMLContent = fs.readFileSync(
      path.join(rootDirectory + filePath),
      'utf8'
    );
    app.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
  }
}

// for serving built static js/css files
exports.builtStaticFiles = function(app, folderName, rootDirectory, filePath){
  // const rootDirectory = properties.rootDirectory;
  // const filePath = properties.filePath;
  // const folderName = properties.folderName;
  // const app = properties.application;
  console.log(folderName);
console.log(app);
  app.use(
    folderName,
    express.static(path.join(rootDirectory + filePath))
  );
}