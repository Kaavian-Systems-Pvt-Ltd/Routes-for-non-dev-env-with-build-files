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
  it('Serve built Static folder', async () => {
    const bulidStub = sandbox.stub(buildFunction, 'builtStaticFiles').returns(true);
    const mockResponse = { json: bulidStub };
    buildFunction.build(mockResponse);
    expect(mockResponse.json.getCall(0).returnValue).toEqual(true);
  });

  it('should initialise express server', () => {
    sandbox.stub('express');
    const mockResponse = () => {
      return {
        use: sandbox.callBack()
      }
    };
    Object.defineProperty(mockResponse, 'static', { value: sandbox.callBack() })
    return mockResponse;
  });
});