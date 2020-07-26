import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PradminComponent } from './pradmin.component';
import { InqueryComponent } from './inquery/inquery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageMovablePropComponent} from "./manage-movable-prop/manage-movable-prop.component";
import { ManageNonMovablePropComponent } from './manage-non-movable-prop/manage-non-movable-prop.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: PradminComponent },
  { path:'admin-dashboard', component: DashboardComponent},
  { path: 'inquery', component: InqueryComponent},
  { path: 'movable', component: ManageMovablePropComponent},
  { path: 'non-movable', component: ManageNonMovablePropComponent},
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PradminRoutingModule { }
