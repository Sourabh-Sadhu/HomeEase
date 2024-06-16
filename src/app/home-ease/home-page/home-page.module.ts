import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Route, RouterModule, Routes } from '@angular/router';

const route:Routes=[{
  path:'',component:HomePageComponent
}]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class HomePageModule { }
