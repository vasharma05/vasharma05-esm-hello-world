import { registerBreadcrumbs, defineConfigSchema, getAsyncLifecycle } from '@openmrs/esm-framework';
import { backendDependencies } from './openmrs-backend-dependencies';

const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

function setupOpenMRS() {
  const moduleName = '@openmrs/esm-patient-registration-app';
  const pageName = 'vasharma05-component';

  const options = {
    featureName: 'VASHARMA HELLO WORLD',
    moduleName,
  };

  registerBreadcrumbs([
    {
      path: `${window.spaBase}/${pageName}`,
      title: 'Patient Registration',
      parent: `${window.spaBase}/home`,
    },
  ]);

  return {
    lifecycle: getAsyncLifecycle(() => import('./hello-world.component'), options),
    activate: 'vasharma05',
    extensions: [
      {
        id: 'registration-home-link',
        slot: 'homepage-dashboard-slot',
        load: getAsyncLifecycle(() => import('./home-link'), options),
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
