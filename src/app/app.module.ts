import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { StudentsComponent } from './views/students/students.component';
import { NamesearchPipe } from './namesearch.pipe';
import { SurnamesearchPipe } from './surnamesearch.pipe';
import { BirthdaysearchPipe } from './birthdaysearch.pipe';
import { CheckindatesearchPipe } from './checkindatesearch.pipe';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HouseResidentsComponent } from './views/house-residents/house-residents.component';

const routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'house-residents',
    component: HouseResidentsComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NamesearchPipe,
    SurnamesearchPipe,
    BirthdaysearchPipe,
    CheckindatesearchPipe,
    HomePageComponent,
    HouseResidentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
