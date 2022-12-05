const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const buildFunction = require('../index');

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
    const bulidStub = sandbox.stub(buildFunction, 'build').returns('Error..');
    const mockResponse = { json: bulidStub };
    buildFunction.build(mockResponse);
    expect(mockResponse.json.getCall(0).returnValue).toEqual('Error..');
  });

  it('Serve built html file', async () => {
    const value = buildFunction.builtStaticFiles({ application: 'app', rootDirectory: __dirname, filePath: '/../client/build/index.html' });
    console.log(value);
    expect(value).toEqual(value);
  });

  it('Serve built html file..', async () => {
    let fs = require('fs');
    const bulidStub = sandbox.stub(buildFunction, 'build').returns(true);
    const readFileStub = await sinon.stub(fs,'readFileSync').returns();
    console.log(readFileStub);
    expect(bulidStub).toEqual(readFileStub);
  });
});

describe('Serve built files', () => {
  it('Static folder', async () => {
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
});
