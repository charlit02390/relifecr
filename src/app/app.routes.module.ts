import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { InstitutionComponent } from './institution/institution.component';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
    { 
        path: '',  
        component: HomeComponent 
        //canActivate: [AuthGuard],
        // resolve: {
        //     csrf: CsrfResolver
        // }
    },
    {
        path: 'login',
        component: LoginComponent
        // resolve: {
        //     csrf: CsrfResolver
        // }
    },
    { 
        path: 'user',  
        component: UserComponent
        //canActivate: [AuthGuard],
        // resolve: {
        //     csrf: CsrfResolver
        // }
    },
    { 
        path: 'institution',  
        component: InstitutionComponent
        //canActivate: [AuthGuard],
        // resolve: {
        //     csrf: CsrfResolver
        // }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            ROUTES,
            { 
                preloadingStrategy: PreloadAllModules, 
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }