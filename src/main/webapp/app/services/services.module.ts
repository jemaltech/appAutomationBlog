import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppAutomationSharedModule } from '../shared';

import { SERVICES_ROUTE, ServicesComponent } from './';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

@NgModule({
  imports: [AppAutomationSharedModule, RouterModule.forRoot([SERVICES_ROUTE], { useHash: true })],
  declarations: [ServicesComponent, PageOneComponent, PageTwoComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppAutomationAppServicesModule {}
