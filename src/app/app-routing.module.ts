import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path : '' , component : DashboardComponent},
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'quiz' , component : QuizComponent},
  {path : 'result' , component : ResultComponent},
  {path: '**', redirectTo: "", pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
