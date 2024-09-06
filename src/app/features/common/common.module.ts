import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'notifications', component: NotificationsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DashboardComponent,
    UserProfileComponent,
    NotificationsComponent,
  ],
})
export class CommonModule {}
