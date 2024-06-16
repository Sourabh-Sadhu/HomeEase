import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEaseComponent } from './home-ease.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path: '', component: HomeEaseComponent, children: [
    { path: '', redirectTo: 'data', pathMatch: 'full' },
    {
      path: 'data',
      loadChildren: () =>
        import('./home-page/home-page.module').then((m) => m.HomePageModule),
    },
]}
]
@NgModule({
  declarations: [
    HomeEaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeEaseModule { }
