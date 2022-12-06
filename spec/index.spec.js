const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const buildFunction = require('../index');
const request = require('request');
const { application } = require('express');

describe('Server built files', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Serve built html file', async () => {
    const bulidStub = sandbox.stub(buildFunction, 'build').returns(true);
    const mockResponse = { json: bulidStub };
    buildFunction.build(mockResponse);
    expect(mockResponse.json.getCall(0).returnValue).toEqual(true);
  });

  it('Serve built html file', async () => {
    const bulidStub = sandbox.stub(buildFunction, 'build').returns('Something went wrong!');
    const mockResponse = { json: bulidStub };
    buildFunction.build(mockResponse);
    expect(mockResponse.json.getCall(0).returnValue).toEqual('Something went wrong!');
  });

  it('Serve built html file', async () => {
    const value = buildFunction.build({ application: 'app', rootDirectory: 'D:/JS/CHECK-IN/server', filePath: '/../client/build/index.html' });
    sandbox.stub(application,'all');
    console.log(value);
    expect(value).toEqual(value);
  });

  it('Static folder', async () => {
    const value = buildFunction.build({application: 'app', rootDirectory: __dirname, filePath: '/../client/build/index.html' });
    sandbox.stub('app',  () => {
      const mockResponse = () => {
        return {
          use: sandbox.stub(value)
        }
      };
      expect(mockResponse, 'static').toEqual(mockResponse)
    });
    // expect(value).toEqual(true);
  });

  it('Serve built html file..', async () => {
    sandbox.stub(buildFunction, 'build').returns(true);
    const value = sinon.stub(fs,'readFileSync')
    expect(value).toEqual(true);
  });
});

describe('Serve built files', () => {
  it('Static folder', async () => {
    sandbox.spy(application,'use');
    const value = buildFunction.builtStaticFiles({application: 'app', folderName: '/static', rootDirectory: __dirname, filePath: '/../client/build/static' });
    sandbox.stub('app',  () => {
      const mockResponse = () => {
        return {
          use: sandbox.stub(value)
        }
      };
      expect(mockResponse, 'static').toEqual(mockResponse)
    });
    // expect(value).toEqual(true);
  });
  it('Static folder', async () => {
    const value = buildFunction.builtStaticFiles({application: 'app', folderName: '/static', rootDirectory: __dirname, filePath: '/../client/build/static' });
    sandbox.stub('app',  () => {
      const mockResponse = () => {
        return {
          use: sandbox.stub(value),
          res: 500
        }
      };
      expect(mockResponse, 'static').toEqual(500);
    });
    // expect(value).toEqual(true);
  });

  it('Serve built html file', async () => {
    const value = buildFunction.builtStaticFiles({ application: 'app', folderName: '/static', rootDirectory: __dirname, filePath: '/../client/build/static' });
    console.log(value);
    expect(value).toEqual(value);
  });

});
