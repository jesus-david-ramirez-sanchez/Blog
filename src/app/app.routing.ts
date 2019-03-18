import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full'
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }