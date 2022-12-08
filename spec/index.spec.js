const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const { build, builtStaticFiles} = require('../index');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

describe('Serve built files', () => {
  afterEach(async () => {
    sandbox.restore();
  });

  it('Serve html files', () => {
    const indexHTMLContent = '<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>React App</title><script defer="defer" src="/static/js/main.c8003bb6.js"></script><link href="/static/css/main.0ec8b43b.css" rel="stylesheet"></head><body class="index"><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>';
    sandbox.stub(fs, 'readFileSync').returns();
    sandbox.stub(path, 'join');
    sandbox.stub(app, 'all').returns(indexHTMLContent)
    const value = build({ expressApplication: app, rootDirectory: 'D:/JS/CHECK-IN/server', filePath: '/../client/build/index.html' });
    expect(value).toEqual(undefined);
  })

  it('Serve html files', () => {
    const value = build({ expressApplication: app, rootDirectory: 'D:/JS/CHECK-IN', filePath: '/client/build/index.html' });
    expect(value).toEqual(undefined)
  })

  it('Serve built static file', () => {
    sandbox.stub(app, 'use').returns();
    sandbox.stub(express, 'static');
    const value = builtStaticFiles({ expressApplication: app, express: express, folderName: '/static', rootDirectory: 'D:/JS/CHECK-IN/server', filePath: '/../client/build/static' });
    expect(value).toEqual(value);
  });
});
