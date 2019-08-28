import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppAutomationSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    AppAutomationSharedModule,
    RouterModule.forChild([HOME_ROUTE]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCro7bIfprX1GqcmHfkFF9sR1V9wfVthnM'
    })
  ],

  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppAutomationHomeModule {}
