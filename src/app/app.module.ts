import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { CatsComponent } from "./cats/cats.component";
import { CatsListComponent } from "./cats/cats-list/cats-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { CatsDetailsComponent } from "./cats/cats-list/cats-details/cats-details.component";
import { AuthInterceptor } from "./cats/auth-interceptor.service";
import { CatsSearchComponent } from './cats/cats-list/cats-search/cats-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CatsComponent,
    CatsListComponent,
    HomeComponent,
    CatsDetailsComponent,
    CatsSearchComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
