import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cat } from "../cats/cats.model";
@Component({
  selector: "app-cats",
  templateUrl: "./cats.component.html",
  styleUrls: ["./cats.component.css"]
})
export class CatsComponent implements OnInit {
  loadCat: Cat;
  loadCats;
  isFetching = false;

  constructor(private http: HttpClient) {}
  baseUrl: string = "https://api.thecatapi.com/v1/";
  queryUrl1: string = "images/search?limit=100";
  queryUrl2: string = "votes";
  ngOnInit(): void {
    this.fetchCats();
  }

  private fetchCats() {
    this.isFetching = true;
    this.http.get(this.baseUrl + this.queryUrl1).subscribe(
      (cats: Cat[]) => {
        this.isFetching = false;
        this.loadCats = cats;
        this.loadCat = cats[0];
      },
      error => {
        console.log(error);
      }
    );
  }
  vote(postData: { image_id: string; value: number }) {
    this.http.post(this.baseUrl + this.queryUrl2, postData).subscribe(
      response => {
        console.log("Did you vote?", response);
      },
      error => {
        console.log(error);
      }
    );
    //once users cast their vote, show another picture
    this.loadCat = this.loadCats[Math.floor(Math.random() * 101)];
  }
}
