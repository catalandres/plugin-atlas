// import { TestContext } from '@salesforce/core/lib/testSetup.js';
// import { expect } from 'chai';
// import { stubSfCommandUx } from '@salesforce/sf-plugins-core';
// import AtlasGenerateXlsx from '../../../../src/commands/atlas/generate/xlsx.js';

// describe('atlas generate xlsx', () => {
//   const $$ = new TestContext();
//   let sfCommandStubs: ReturnType<typeof stubSfCommandUx>;

//   beforeEach(() => {
//     sfCommandStubs = stubSfCommandUx($$.SANDBOX);
//   });

//   afterEach(() => {
//     $$.restore();
//   });

//   it('runs hello', async () => {
//     await AtlasGenerateXlsx.run([]);
//     const output = sfCommandStubs.log
//       .getCalls()
//       .flatMap((c) => c.args)
//       .join('\n');
//     expect(output).to.include('hello world');
//   });

//   it('runs hello with --json and no provided name', async () => {
//     const result = await AtlasGenerateXlsx.run([]);
//     expect(result.path).to.equal(
//       '/Users/andres/Projects/proj-plugins/plugin-atlas/src/commands/atlas/generate/xlsx.ts'
//     );
//   });

//   it('runs hello world --name Astro', async () => {
//     await AtlasGenerateXlsx.run(['--name', 'Astro']);
//     const output = sfCommandStubs.log
//       .getCalls()
//       .flatMap((c) => c.args)
//       .join('\n');
//     expect(output).to.include('hello Astro');
//   });
// });
