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
import { ReasonsComponent } from './poems/reasons/reasons.component';
import { ChildComponent } from './poems/child/child.component';
import { ThirdPoemComponent } from './poems/tinder-poems/third-poem/third-poem.component';
import { MissedOpportunityComponent } from './poems/missed-opportunity/missed-opportunity.component';
import { OneTimeComponent } from './poems/one-time/one-time.component';
import { TheDanceComponent } from './poems/the-dance/the-dance.component';
import { BiggerHeartsBleedBetterComponent } from './poems/bigger-hearts-bleed-better/bigger-hearts-bleed-better.component';
import { PerfectionComponent } from './poems/perfection/perfection.component';
import { HowDidWeGetHereComponent } from './poems/how-did-we-get-here/how-did-we-get-here.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, data: { animation: 'Welcome' }},
  { path: 'intro', component: IntroComponent, data: { animation: 'Poem' }},
  { path: 'love-life-lit', component: LoveLifeLiteratureComponent, data: { animation: 'Poem'}},
  { path: 'glass-rose', component: GlassRoseComponent, data: { animation: 'Poem' }},
  { path: 'tinder-poems', component: FirstPoemComponent, data: { animation: 'Poem' }},
  { path: 'tinder-poems-2', component: SecondPoemComponent, data: { animation: 'SecondPoem'}},
  { path: 'tinder-poems-3', component: ThirdPoemComponent, data: { animation: 'ThirdPoem'}},
  { path: 'the-prophecy', component: TheProphecyComponent, data: { animation: 'Poem' }},
  { path: 'happy-ride', component: HappyRideComponent, data: { animation: 'Poem' }},
  { path: 'speak-english', component: SpeakEnglishComponent, data: { animation: 'Poem' }},
  { path: 'youre-my-dad', component: UrMyDadComponent, data: { animation: 'Poem' }},
  { path: 'edgar-allen-poem', component: EdgarAllenPoemComponent, data: { animation: 'Poem' }},
  { path: 'christmas-rap', component: ChristmasRapComponent, data: { animation: 'Poem' }},
  { path: 'baby-gurl', component: BabyGurlComponent, data: { animation: 'Poem' }},
  { path: 'climbing', component: ClimbingComponent, data: { animation: 'Poem' }},
  { path: 'the-world', component: TheWorldComponent, data: { animation: 'Poem' }},
  { path: 'find-it-quick', component: FindItQuickComponent, data: { animation: 'Poem' }},
  { path: 'mirrored-glass', component: MirroredGlassComponent, data: { animation: 'Poem' }},
  { path: 'reasons', component: ReasonsComponent, data: { animation: 'Poem' }},
  { path: 'child', component: ChildComponent, data: { animation: 'Poem' }},
  { path: 'missed-opportunity', component: MissedOpportunityComponent, data: { animation: 'Poem' }},
  { path: 'one-time', component: OneTimeComponent, data: { animation: 'Poem' }},
  { path: 'the-dance', component: TheDanceComponent, data: { animation: 'Poem' }},
  { path: 'bigger-hearts-bleed-better', component: BiggerHeartsBleedBetterComponent, data: { animation: 'Poem' }},
  { path: 'perfection', component: PerfectionComponent, data: { animation: 'Poem' }},
  { path: 'how-did-we-get-here', component: HowDidWeGetHereComponent, data: { animation: 'Poem' }},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
