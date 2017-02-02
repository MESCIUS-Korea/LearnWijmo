import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReferencingComponent } from './referencing/referencing.component';
import { OverviewComponent } from './overview/overview.component';
import { FilterComponent } from './flexgrid/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferencingComponent,
    OverviewComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
