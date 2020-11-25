import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { ReactiveFormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BmiComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
