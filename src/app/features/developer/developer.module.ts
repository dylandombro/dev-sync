import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { ClientCommunicationComponent } from './components/client-communication/client-communication.component';

const routes: Routes = [
  { path: '', component: KanbanBoardComponent },
  { path: 'task/:id', component: TaskDetailsComponent },
  { path: 'communication', component: ClientCommunicationComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    KanbanBoardComponent,
    TaskDetailsComponent,
    ClientCommunicationComponent,
  ],
})
export class DeveloperModule {}
