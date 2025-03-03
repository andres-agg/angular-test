import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    /*
      [Esta metodologia no es SEO friendly]
      Agrega el # a las rutas para que de esta manera angular gestione las rutas
      desde el root, sin usar carpetas.

      server site rendering
      Si se necesita remover hay que agregar
      la configuracion al hosting con httaccess
    */
    provideRouter(routes),
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};
