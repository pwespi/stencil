export { createJestPuppeteerEnvironment } from './jest/jest-environment';
export { createTesting } from './testing';
export { createTestRunner } from './jest/jest-runner';
export { jestPreprocessor } from './jest/jest-preprocessor';
export { jestSetupTestFramework } from './jest/jest-setup-test-framework';
export { mockBuildCtx, mockConfig, mockCompilerCtx, mockDocument, mockFs, mockLogger, mockStencilSystem, mockWindow } from './mocks';
export { mockFetch } from './mock-fetch';
export { newSpecPage } from './spec-page';
export { shuffleArray } from './testing-utils';
export { transpile } from './test-transpile';
export { TestingFs } from './testing-fs';
export { TestingLegacy } from './testing_legacy';

export {
  EventSpy,
  SpecPage,
  Testing,
} from '@stencil/core/internal';

export {
  E2EElement,
  E2EPage,
  newE2EPage,
} from './puppeteer';


import { URL as nodeURL } from 'url';
if (typeof URL === 'undefined') {
  // polyfill global URL for Node version < 10.0.0
  (global as any).URL = nodeURL;
}
