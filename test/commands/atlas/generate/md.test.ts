// import { TestContext } from '@salesforce/core/lib/testSetup.js';
// import { expect } from 'chai';
// import { stubSfCommandUx } from '@salesforce/sf-plugins-core';
// import AtlasGenerateMd from '../../../../src/commands/atlas/generate/md.js';

// describe('atlas generate md', () => {
//   const $$ = new TestContext();
//   let sfCommandStubs: ReturnType<typeof stubSfCommandUx>;

//   beforeEach(() => {
//     sfCommandStubs = stubSfCommandUx($$.SANDBOX);
//   });

//   afterEach(() => {
//     $$.restore();
//   });

//   it('runs hello', async () => {
//     await AtlasGenerateMd.run([]);
//     const output = sfCommandStubs.log
//       .getCalls()
//       .flatMap((c) => c.args)
//       .join('\n');
//     expect(output).to.include('hello world');
//   });

//   it('runs hello with --json and no provided name', async () => {
//     const result = await AtlasGenerateMd.run([]);
//     expect(result.path).to.equal('/Users/andres/Projects/proj-plugins/plugin-atlas/src/commands/atlas/generate/md.ts');
//   });

//   it('runs hello world --name Astro', async () => {
//     await AtlasGenerateMd.run(['--name', 'Astro']);
//     const output = sfCommandStubs.log
//       .getCalls()
//       .flatMap((c) => c.args)
//       .join('\n');
//     expect(output).to.include('hello Astro');
//   });
// });
