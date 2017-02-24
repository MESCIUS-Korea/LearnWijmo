import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReferencingComponent } from './wijmo5-Info/referencing/referencing.component';
import { OverviewComponent } from './wijmo5-Info/overview/overview.component';
import { Ng1DirectiveComponent } from './wijmo5-Info/ng1-directive/ng1-directive.component';
import { SizingStyleComponent } from './wijmo5-Info/sizing-style/sizing-style.component';
import { PsesudoComponent } from './wijmo5-Info/psesudo/psesudo.component';
import { EventsComponent } from './wijmo5-Info/events/events.component';
import { EnumerationsComponent } from './wijmo5-Info/enumerations/enumerations.component';
import { GlobalizationComponent } from './wijmo5-Info/globalization/globalization.component';
import { GlyphsComponent } from './wijmo5-Info/glyphs/glyphs.component';
import { IntellisenseComponent } from './wijmo5-Info/intellisense/intellisense.component';
import { LesscssComponent } from './wijmo5-Info/lesscss/lesscss.component';
import { SelectionComponent } from './flexgrid/introduction/selection/selection.component';
import { ClipboardComponent } from './flexgrid/introduction/clipboard/clipboard.component';
import { ColumnMoveComponent } from './flexgrid/columns/column-move/column-move.component';
import { SortingComponent } from './flexgrid/columns/sorting/sorting.component';
import { SizingComponent } from './flexgrid/columns/sizing/sizing.component';
import { LayoutComponent } from './flexgrid/columns/layout/layout.component';
import { FreezingComponent } from './flexgrid/columns/freezing/freezing.component';
import { FilteringComponent } from './flexgrid/columns/filtering/filtering.component';
import { GroupingComponent } from './flexgrid/columns/grouping/grouping.component';
import { AddDeleteComponent } from './flexgrid/rows/add-delete/add-delete.component';
import { RowMoveComponent } from './flexgrid/rows/row-move/row-move.component';
import { DetailRowComponent } from './flexgrid/rows/detail-row/detail-row.component';
import { HeaderMergeComponent } from './flexgrid/header/header-merge/header-merge.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferencingComponent,
    OverviewComponent,   
    Ng1DirectiveComponent,
    SizingStyleComponent,
    PsesudoComponent,
    EventsComponent,
    EnumerationsComponent,
    GlobalizationComponent,
    GlyphsComponent,
    IntellisenseComponent,
    LesscssComponent,
    SelectionComponent,
    ClipboardComponent,
    ColumnMoveComponent,
    SortingComponent,
    SizingComponent,
    LayoutComponent,
    FreezingComponent,
    FilteringComponent,
    GroupingComponent,
    AddDeleteComponent,
    RowMoveComponent,
    DetailRowComponent,
    HeaderMergeComponent
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
