import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlassRoseComponent } from './poems/glass-rose/glass-rose.component';
import { IntroComponent } from './poems/intro/intro.component';
import { LoveLifeLiteratureComponent } from './poems/love-life-literature/love-life-literature.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, data: { animation: 'Welcome' }},
  { path: 'intro', component: IntroComponent, data: { animation: 'Short' }},
  { path: 'love-life-lit', component: LoveLifeLiteratureComponent, data: { animation: 'Long'}},
  { path: 'glass-rose', component: GlassRoseComponent, data: { animation: 'Long' }},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
