import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppAutomationSharedModule } from '../../shared';
import { ChartModule } from 'primeng/primeng';

import { PolarareachartComponent, polarareachartRoute } from './';

const DASHBOARD_STATES = [polarareachartRoute];

@NgModule({
  imports: [AppAutomationSharedModule, ChartModule, RouterModule.forRoot(DASHBOARD_STATES, { useHash: true })],
  declarations: [PolarareachartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppAutomationPolarareachartModule {}
