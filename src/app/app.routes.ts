import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { DeveloperLayoutComponent } from './layout/developer-layout/developer-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: '',
        loadChildren: () =>
          import('./features/common/common.module').then((m) => m.CommonModule),
      },
    ],
  },
  {
    path: 'developer',
    component: DeveloperLayoutComponent,
    canActivate: [authGuard],
    data: { roles: ['developer'] },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/developer/developer.module').then(
            (m) => m.DeveloperModule
          ),
      },
    ],
  },
  {
    path: 'client',
    component: ClientLayoutComponent,
    canActivate: [authGuard],
    data: { roles: ['client'] },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/client/client.module').then((m) => m.ClientModule),
      },
    ],
  },
];
