const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const buildFunction = require('../index');

describe('Server built files', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Serve built html file', async () => {
    const buildStub = sandbox.stub(buildFunction, 'build').returns(true);
    const mockResponse = { json: buildStub };
    buildFunction.build(mockResponse);
    expect(mockResponse.json.getCall(0).returnValue).toEqual(true);
  });

  it('Serve built html file', async () => {
    sandbox.stub(buildFunction, 'build').returns(Promise.reject(new Error('error')));
    const mockResponse = 'error';
    buildFunction.build(mockResponse);
    expect(mockResponse).toEqual('error');
  });

  it('Serve built html file', async () => {
    const value = buildFunction.build({ expressApplication: 'app', rootDirectory: 'D:/JS/CHECK-IN/server', filePath: '/../client/build/index.html' });
    expect(value).toEqual(null);
  });

  // it('Serve html files', async () => {
  //   sandbox.stub(buildFunction, 'builtStaticFiles')
  // })
});

describe('Serve built files', () => {
  afterEach(async () => {
    sandbox.restore();
  });

  it('Serve built html file', async () => {
    sandbox.stub(buildFunction, 'builtStaticFiles').returns(true);
    const mockResponse = null;
    buildFunction.builtStaticFiles(mockResponse);
    expect(mockResponse).toEqual(null);
  });

  it('Serve built html file', async () => {
    sandbox.stub(buildFunction, 'builtStaticFiles').returns(Promise.reject(new Error('error')));
    const mockResponse = 'error';
    buildFunction.builtStaticFiles(mockResponse);
    expect(mockResponse).toEqual('error');
  });

  it('Serve built static file', async () => {
    const value = buildFunction.builtStaticFiles({ expressApplication: 'app', express: 'express', folderName: '/static', rootDirectory: 'D:/JS/CHECK-IN/server', filePath: '/../client/build/static' });
    console.log(value);
    expect(value).toEqual(null);
  });
});
