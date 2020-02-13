import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CatsComponent } from "./cats/cats.component";
import { CatsListComponent } from "./cats/cats-list/cats-list.component";
import { CatsDetailsComponent } from "./cats/cats-list/cats-details/cats-details.component";
const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "browse",
    component: CatsComponent
  },
  {
    path: "wikipedicat",
    component: CatsListComponent
  },
  {
    path: "wikipedicat/:breedId",
    component: CatsDetailsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
