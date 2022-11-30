const express = require('express');
// const app = express();
// const fs = require('fs');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

// For any other request, serve HTML in DIT environment (cloud env)
/**
 * 
 * @param {
 * } app 
 */
exports.build = function(app){
  if (NODE_ENV === 'DIT') {
    app.all('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }
  console.log(__dirname);
  app.use(express.static(path.join(__dirname, 'build')));
}
