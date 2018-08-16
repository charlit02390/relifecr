import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { InstitutionComponent } from './institution/institution.component';
import { HomeComponent } from './home/home.component';
import { MakeblogComponent } from './makeblog/makeblog.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { CsrfResolver} from './app.resolver';
import { AuthGuard } from './auth';


export const ROUTES: Routes = [
    { 
        path: '',  
        component: HomeComponent,
        resolve: {
            csrf: CsrfResolver
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        resolve: {
            csrf: CsrfResolver
        }
    },
    { 
        path: 'user',  
        component: UserComponent,
        canActivate: [AuthGuard],
        resolve: {
            csrf: CsrfResolver
        }
    },
    { 
        path: 'institution',  
        component: InstitutionComponent,
        canActivate: [AuthGuard],
        resolve: {
            csrf: CsrfResolver
        }
    },
    { 
        path: 'makeblog',  
        component: MakeblogComponent,
        resolve: {
            csrf: CsrfResolver
        }
    },
    { 
        path: 'manage-blogs',  
        component: ManageBlogsComponent,
        canActivate: [AuthGuard],
        resolve: {
            csrf: CsrfResolver
        }
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
    providers: [CsrfResolver,AuthGuard]
})
export class AppRoutingModule { }