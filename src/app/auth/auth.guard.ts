import { Injectable } from '@angular/core';
import { 
    ActivatedRouteSnapshot, 
    CanActivate, 
    CanActivateChild, 
    CanLoad, 
    Route,
    Router,
    RouterStateSnapshot
} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['login']);
        return false; 
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }
}