import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TechdayFormularComponent } from "./techday-formular/techday-formular.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, TechdayFormularComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
