import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Breed } from "./cats-details.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-cats-details",
  templateUrl: "./cats-details.component.html",
  styleUrls: ["./cats-details.component.css"]
})
export class CatsDetailsComponent implements OnInit {
  loadBreed: Breed;
  breed_id: string;
  isFetching = false;
  constructor(private actRoute: ActivatedRoute, private http: HttpClient) {
    this.breed_id = this.actRoute.snapshot.params.breedId;
  }

  ngOnInit() {
    this.feedBreed();
  }

  private feedBreed() {
    this.isFetching = true;
    this.http
      .get<Breed>(`https://api.thecatapi.com/v1/breeds/${this.breed_id}`)
      .subscribe(
        breed => {
          console.log("any breed", breed);
          this.isFetching = false;
          this.loadBreed = breed;
        },
        error => {
          console.log(error);
        }
      );
  }
}
