import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpponentsListComponent } from './opponents/opponents-list/opponents-list.component';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import { MatchesScreenComponent } from './matches-screen/matches-screen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OpponentDetailsComponent } from './opponents/opponent-details/opponent-details.component';
import { OpponentNewComponent } from './opponents/opponent-new/opponent-new.component';

const routes: Routes = [
  {path: 'opponents', component: OpponentsListComponent},
  {path: 'opponents/:id', component: OpponentDetailsComponent},
  {path: 'createOpponent', component: OpponentNewComponent},
  {path: 'matches', component: MatchesScreenComponent},
  {path: '', component: HomeScreenComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }