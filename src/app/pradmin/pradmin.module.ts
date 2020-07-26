import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PradminRoutingModule } from './pradmin-routing.module';
import { PradminComponent } from './pradmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InqueryComponent } from './inquery/inquery.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManageMovablePropComponent } from './manage-movable-prop/manage-movable-prop.component';
import { ManageNonMovablePropComponent } from './manage-non-movable-prop/manage-non-movable-prop.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [PradminComponent, DashboardComponent, InqueryComponent, ManageMovablePropComponent, ManageNonMovablePropComponent, LogoutComponent],
  imports: [
    CommonModule,
    PradminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PradminModule { }
