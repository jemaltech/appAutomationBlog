import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppAutomationSharedModule } from '../shared';

import { CONTACT_US_ROUTE, ContactUsComponent } from './';

@NgModule({
  imports: [AppAutomationSharedModule, RouterModule.forRoot([CONTACT_US_ROUTE], { useHash: true })],
  declarations: [ContactUsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppAutomationAppContactUsModule {}
