import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { OverviewComponent } from './wijmo5-Info/overview/overview.component';
import { ReferencingComponent } from './wijmo5-Info/referencing/referencing.component';
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


//2. column
import { ColumnMoveComponent } from './flexgrid/columns/column-move/column-move.component';
import { SortingComponent } from './flexgrid/columns/sorting/sorting.component';
import { SizingComponent } from './flexgrid/columns/sizing/sizing.component';
import { LayoutComponent } from './flexgrid/columns/layout/layout.component';
import { FreezingComponent } from './flexgrid/columns/freezing/freezing.component';
import { FilteringComponent } from './flexgrid/columns/filtering/filtering.component';
import { GroupingComponent } from './flexgrid/columns/grouping/grouping.component';


//3. Rows
import { AddDeleteComponent } from './flexgrid/rows/add-delete/add-delete.component';
import { RowMoveComponent } from './flexgrid/rows/row-move/row-move.component';
import { DetailRowComponent } from './flexgrid/rows/detail-row/detail-row.component';

//4. Header
import { HeaderMergeComponent } from './flexgrid/header/header-merge/header-merge.component';

const APP_ROUTES:Routes = [
    { path: '', component: OverviewComponent },  
    { path: 'referencing', component: ReferencingComponent },  
    { path: 'ng1-directive', component: Ng1DirectiveComponent },
    { path: 'sizing-style', component: SizingStyleComponent },
    { path: 'psesudo', component: PsesudoComponent },    
    { path: 'events', component: EventsComponent },    
    { path: 'enumerations', component: EnumerationsComponent },    
    { path: 'globalization', component: GlobalizationComponent },    
    { path: 'glyphs', component: GlyphsComponent },
    { path: 'intellisense', component: IntellisenseComponent },    
    { path: 'lesscss', component: LesscssComponent },    
    { path: 'fg-selection', component: SelectionComponent },
    { path: 'fg-clipboard', component: ClipboardComponent },    
    { path: 'fg-col-move', component: ColumnMoveComponent },    
    { path: 'fg-sorting', component: SortingComponent },
    { path: 'fg-sizing', component: SizingComponent },
    { path: 'fg-layout', component: LayoutComponent },        
    { path: 'fg-freezing', component: FreezingComponent },
    { path: 'fg-filtering', component: FilteringComponent },
    { path: 'fg-grouping', component: GroupingComponent },
    { path: 'fg-rw-add-delete', component: AddDeleteComponent },        
    { path: 'fg-rw-move', component: RowMoveComponent },
    { path: 'fg-rw-deailRow', component: DetailRowComponent },
    { path: 'fg-hd-merge', component: HeaderMergeComponent }    
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}