import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { OverviewComponent } from "./overview/overview.component";
import { ReferencingComponent } from "./referencing/referencing.component";


const APP_ROUTES:Routes = [
    { path: '', component: OverviewComponent },  
    { path: 'referencing', component: ReferencingComponent },  
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