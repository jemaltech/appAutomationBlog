import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppAutomationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AppAutomationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AppAutomationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppAutomationSharedModule {
  static forRoot() {
    return {
      ngModule: AppAutomationSharedModule
    };
  }
}
