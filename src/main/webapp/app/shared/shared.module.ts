import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppAutomationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AppAutomationSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [AppAutomationSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppAutomationSharedModule {
  static forRoot() {
    return {
      ngModule: AppAutomationSharedModule
    };
  }
}
