import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppAutomationBarchartModule } from './barchart/barchart.module';
import { AppAutomationDoughnutchartModule } from './doughnutchart/doughnutchart.module';
import { AppAutomationLinechartModule } from './linechart/linechart.module';
import { AppAutomationPiechartModule } from './piechart/piechart.module';
import { AppAutomationPolarareachartModule } from './polarareachart/polarareachart.module';
import { AppAutomationRadarchartModule } from './radarchart/radarchart.module';

@NgModule({
  imports: [
    AppAutomationBarchartModule,
    AppAutomationDoughnutchartModule,
    AppAutomationLinechartModule,
    AppAutomationPiechartModule,
    AppAutomationPolarareachartModule,
    AppAutomationRadarchartModule
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppAutomationDashboardModule {}
