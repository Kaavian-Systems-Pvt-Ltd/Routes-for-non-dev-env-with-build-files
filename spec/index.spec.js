const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const buildFunction = require('../index');

describe('Server built files', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Server Static folder', async () => {
    const bulidStub = sandbox.stub(buildFunction, 'build').returns(true);
    const mockResponse = { json: bulidStub };
    buildFunction.build(mockResponse);
    expect(mockResponse.json.getCall(0).returnValue).toEqual(true);
    });
})