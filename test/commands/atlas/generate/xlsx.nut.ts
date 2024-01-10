// import { execCmd, TestSession } from '@salesforce/cli-plugins-testkit';
// import { expect } from 'chai';

// describe('atlas generate xlsx NUTs', () => {
//   let session: TestSession;

//   before(async () => {
//     session = await TestSession.create({ devhubAuthStrategy: 'NONE' });
//   });

//   after(async () => {
//     await session?.clean();
//   });

//   it('should display provided name', () => {
//     const name = 'World';
//     const command = `atlas generate xlsx --name ${name}`;
//     const output = execCmd(command, { ensureExitCode: 0 }).shellOutput.stdout;
//     expect(output).to.contain(name);
//   });
// });
