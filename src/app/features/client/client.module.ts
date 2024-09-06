import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { TaskSubmissionComponent } from './components/task-submission/task-submission.component';
import { DeveloperCommunicationComponent } from './components/developer-communication/developer-communication.component';

const routes: Routes = [
  { path: '', component: ProjectOverviewComponent },
  { path: 'submit-task', component: TaskSubmissionComponent },
  { path: 'communication', component: DeveloperCommunicationComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProjectOverviewComponent,
    TaskSubmissionComponent,
    DeveloperCommunicationComponent,
  ],
})
export class ClientModule {}
