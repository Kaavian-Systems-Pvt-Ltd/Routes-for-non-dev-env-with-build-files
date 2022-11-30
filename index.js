const express = require('express');
// const app = express();
const fs = require('fs');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

// For any other request, serve HTML in DIT environment (cloud env)
/**
 * 
 * @param {
 * } app 
 */
exports.build = function(app){
  console.log(path.join(__dirname + '/../../../client/build/index.html'), 'path1');
  if (NODE_ENV === 'DIT') {
    const indexHTMLContent = fs.readFileSync(
      path.join(__dirname + '/../../../client/build/index.html'),
      'utf8'
    );
    app.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
  }
  // For serving built static js/css files
  app.use(
    '/static',
    express.static(path.join(__dirname, '/../../../client/build/static')),
  );
  app.use(
    '/images',
    express.static(path.join(__dirname, '/../client/build/images'))
  );
  console.log(path.join(__dirname, '/../../../client/build/static'), 'path');
}
