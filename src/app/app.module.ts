import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { CatsComponent } from "./cats/cats.component";
import { CatsListComponent } from "./cats/cats-list/cats-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CatsComponent,
    CatsListComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
