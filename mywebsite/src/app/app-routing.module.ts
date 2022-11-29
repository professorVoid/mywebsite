import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    data: { animation: 'HomePage' }},
  {
    path: 'blog',
    component: BlogComponent,
    data: { animation: 'BlogPage' }},
  { path: 'projects', 
    component: ProjectsComponent,
    data: {animation: 'ProjectPage'}},
  { path: 'contact',
    component: ContactComponent,
    data: {animation: 'ContactPage'}},
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
