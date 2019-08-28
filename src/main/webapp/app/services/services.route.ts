import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { ServicesComponent } from './services.component';
import { PAGE_ONE_ROUTE } from './page-one/page-one.route';
import { PAGE_TWO_ROUTE } from './page-two/page-two.route';

export const SERVICES_ROUTE: Route = {
  path: 'services',
  component: ServicesComponent,
  data: {
    authorities: [],
    pageTitle: 'services.title'
  },
  canActivate: [UserRouteAccessService],
  children: [PAGE_ONE_ROUTE, PAGE_TWO_ROUTE]
};
