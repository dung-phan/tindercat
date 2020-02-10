import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { CatsComponent } from './cats/cats.component';
import { CatsListComponent } from './cats/cats-list/cats-list.component';
@NgModule({
  declarations: [AppComponent, NavigationComponent, CatsComponent, CatsListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
