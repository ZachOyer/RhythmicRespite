import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyGurlComponent } from './poems/baby-gurl/baby-gurl.component';
import { ChristmasRapComponent } from './poems/christmas-rap/christmas-rap.component';
import { ClimbingComponent } from './poems/climbing/climbing.component';
import { EdgarAllenPoemComponent } from './poems/edgar-allen-poem/edgar-allen-poem.component';
import { GlassRoseComponent } from './poems/glass-rose/glass-rose.component';
import { HappyRideComponent } from './poems/happy-ride/happy-ride.component';
import { IntroComponent } from './poems/intro/intro.component';
import { LoveLifeLiteratureComponent } from './poems/love-life-literature/love-life-literature.component';
import { SpeakEnglishComponent } from './poems/speak-english/speak-english.component';
import { TheProphecyComponent } from './poems/the-prophecy/the-prophecy.component';
import { TheWorldComponent } from './poems/the-world/the-world.component';
import { FirstPoemComponent } from './poems/tinder-poems/first-poem/first-poem.component';
import { SecondPoemComponent } from './poems/tinder-poems/second-poem/second-poem.component';
import { UrMyDadComponent } from './poems/ur-my-dad/ur-my-dad.component';
import { FindItQuickComponent } from './poems/find-it-quick/find-it-quick.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MirroredGlassComponent } from './poems/mirrored-glass/mirrored-glass.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, data: { animation: 'Welcome' }},
  { path: 'intro', component: IntroComponent, data: { animation: 'Short' }},
  { path: 'love-life-lit', component: LoveLifeLiteratureComponent, data: { animation: 'Short'}},
  { path: 'glass-rose', component: GlassRoseComponent, data: { animation: 'Short' }},
  { path: 'tinder-poems', component: FirstPoemComponent, data: { animation: 'Short' }},
  { path: 'tinder-poems-2', component: SecondPoemComponent, data: { animation: 'SecondPoem'}},
  { path: 'the-prophecy', component: TheProphecyComponent, data: { animation: 'Short' }},
  { path: 'happy-ride', component: HappyRideComponent, data: { animation: 'Short' }},
  { path: 'speak-english', component: SpeakEnglishComponent, data: { animation: 'Short' }},
  { path: 'ur-my-dad', component: UrMyDadComponent, data: { animation: 'Short' }},
  { path: 'edgar-allen-poem', component: EdgarAllenPoemComponent, data: { animation: 'Short' }},
  { path: 'christmas-rap', component: ChristmasRapComponent, data: { animation: 'Short' }},
  { path: 'baby-gurl', component: BabyGurlComponent, data: { animation: 'Short' }},
  { path: 'climbing', component: ClimbingComponent, data: { animation: 'Short' }},
  { path: 'the-world', component: TheWorldComponent, data: { animation: 'Short' }},
  { path: 'find-it-quick', component: FindItQuickComponent, data: { animation: 'Short' }},
  { path: 'mirrored-glass', component: MirroredGlassComponent, data: { animation: 'Short' }},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
