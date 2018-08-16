import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor() { }

    getAccount() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else{
            return false;
        }
    }
}