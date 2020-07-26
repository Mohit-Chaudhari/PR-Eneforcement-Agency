import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MdProfileComponent } from './components/md-profile/md-profile.component';
import { MovablePropComponent } from './components/movable-prop/movable-prop.component';
import { NonMovablePropComponent } from './components/non-movable-prop/non-movable-prop.component';
import { OrgInfoComponent } from './components/org-info/org-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'pradmin', loadChildren: () => import('./pradmin/pradmin.module').then(m => m.PradminModule) },
  { path: 'contact', component: ContactComponent },
  { path: 'md-profile', component: MdProfileComponent },
  { path: 'organization-info', component: OrgInfoComponent },
  { path: 'non-movable-properties', component: NonMovablePropComponent },
  { path: 'movable-properties', component: MovablePropComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
