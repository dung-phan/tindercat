import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Breed } from "./cats-details/cats-details.model";
@Component({
  selector: "app-cats-list",
  templateUrl: "./cats-list.component.html",
  styleUrls: ["./cats-list.component.css", "../../grid.component.css"]
})
export class CatsListComponent implements OnInit {
  loadedBreeds: Breed[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBreeds();
  }

  private fetchBreeds() {
    this.http
      .get<Breed[]>("https://api.thecatapi.com/v1/breeds")
      .subscribe(breeds => {
        console.log(breeds);
        this.loadedBreeds = breeds;
      });
  }
}
