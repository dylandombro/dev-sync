import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { DeveloperLayoutComponent } from './layout/developer-layout/developer-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
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
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/developer/developer.module').then(
            (m) => m.DeveloperModule
          ),
      },
    ],
    // TODO: Add AuthGuard and DeveloperGuard
  },
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/client/client.module').then((m) => m.ClientModule),
      },
    ],
    // TODO: Add AuthGuard and ClientGuard
  },
];
