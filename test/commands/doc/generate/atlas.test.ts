// import { TestContext } from '@salesforce/core/lib/testSetup.js';
// import { expect } from 'chai';
// import { stubSfCommandUx } from '@salesforce/sf-plugins-core';
// import DocGenerateAtlas from '../../../../src/commands/doc/generate/atlas.js';

// describe('doc generate atlas', () => {
//   const $$ = new TestContext();
//   let sfCommandStubs: ReturnType<typeof stubSfCommandUx>;

//   beforeEach(() => {
//     sfCommandStubs = stubSfCommandUx($$.SANDBOX);
//   });

//   afterEach(() => {
//     $$.restore();
//   });

//   it('runs hello', async () => {
//     await DocGenerateAtlas.run([]);
//     const output = sfCommandStubs.log
//       .getCalls()
//       .flatMap((c) => c.args)
//       .join('\n');
//     expect(output).to.include('hello world');
//   });

//   it('runs hello with --json and no provided name', async () => {
//     const result = await DocGenerateAtlas.run([]);
//     expect(result.path).to.equal(
//       '/Users/andres/Projects/proj-plugins/plugin-documentation/src/commands/doc/generate/atlas.ts'
//     );
//   });

//   it('runs hello world --name Astro', async () => {
//     await DocGenerateAtlas.run(['--name', 'Astro']);
//     const output = sfCommandStubs.log
//       .getCalls()
//       .flatMap((c) => c.args)
//       .join('\n');
//     expect(output).to.include('hello Astro');
//   });
// });
