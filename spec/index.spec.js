const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const { build, builtStaticFiles} = require('../index');
const buildFunction = require('../index');
const express = require('express');
const app = express();

describe('Serve built files', () => {
  afterEach( () => {
    sandbox.restore();
  });

  it('Serve HTML file', () => {
    const mockRequest = null;
    let mockResponse = { send: sandbox.spy()};
    buildFunction.serveBuiltFile(mockRequest, mockResponse);
    expect(mockResponse.send.calledOnce).toBe(true);
  });

  it('Serve built static file', () => {
    sandbox.stub(buildFunction, 'builtStaticFiles').returns(true);
    const value = builtStaticFiles({ expressApplication: app, express: express, folderName: '/static', rootDirectory: 'D:/JS/CHECK-IN/server', filePath: '/../client/build/static' });
    expect(value).toEqual(true);
  });

  it('Serve built static file', () => {
    sandbox.stub(buildFunction, 'build').returns(true);
    const value = build({ expressApplication: app, rootDirectory: 'D:/JS/CHECK-IN/server', filePath: '/../client/build/index.html' });
    expect(value).toEqual(true);
  });
});
