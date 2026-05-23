import { defineConfig } from 'cypress';
import { rmSync } from 'fs';

export default defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    downloadsFolder: 'cypress/downloads',
    setupNodeEvents(on) {
      on('task', {
        deleteFolder(folderName: string) {
          rmSync(folderName, { recursive: true, force: true });
          return null;
        },
      });
    },
  },
});
