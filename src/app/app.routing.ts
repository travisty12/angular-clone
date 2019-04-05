import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ModalDivComponent } from './modal-div/modal-div.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'modals/:source',
    component: ModalDivComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
