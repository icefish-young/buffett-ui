import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CarbonModule } from './carbon/carbon.module';
import { AppComponent } from './app.component';
import { StockViewComponent } from './stock-view/stock-view.component';
import { SpaceMgmtComponent } from './space-mgmt/space-mgmt.component';
import { StockDataComponent } from './stock-data/stock-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StockViewComponent,
    SpaceMgmtComponent,
    StockDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarbonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
