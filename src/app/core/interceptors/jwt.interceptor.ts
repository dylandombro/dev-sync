import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const currentUser = authService.currentUserValue;
  const token = localStorage.getItem('token');
  const isLoggedIn = currentUser && token;
  const isApiUrl = req.url.startsWith('/api');

  if (isLoggedIn && isApiUrl) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};
