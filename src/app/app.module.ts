import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { CatsComponent } from "./cats/cats.component";
import { CatsListComponent } from "./cats/cats-list/cats-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { CatsDetailsComponent } from './cats/cats-list/cats-details/cats-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CatsComponent,
    CatsListComponent,
    HomeComponent,
    CatsDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
