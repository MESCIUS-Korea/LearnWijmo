import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { OverviewComponent } from "./overview/overview.component";
import { ReferencingComponent } from "./referencing/referencing.component";
import { FilterComponent } from "./Flexgrid/filter/filter.component";


const APP_ROUTES:Routes = [
    { path: '', component: OverviewComponent },  
    { path: 'referencing', component: ReferencingComponent },  
    { path: 'flexgrid-filtering', component: FilterComponent },
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