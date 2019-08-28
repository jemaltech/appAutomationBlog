import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppAutomationSharedModule } from '../shared';

import { ABOUT_US_ROUTE, AboutUsComponent } from './';

@NgModule({
  imports: [AppAutomationSharedModule, RouterModule.forRoot([ABOUT_US_ROUTE], { useHash: true })],
  declarations: [AboutUsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppAutomationAppAboutUsModule {}
