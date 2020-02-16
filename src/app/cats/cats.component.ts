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
  ngOnInit(): void {
    this.fetchCats();
  }

  private fetchCats() {
    this.isFetching = true;
    this.http
      .get("https://api.thecatapi.com/v1/images/search?format=json&limit=100")
      .subscribe(
        cats => {
          console.log("any cat", cats);
          this.isFetching = false;
          this.loadCats = cats;
          this.loadCat = cats[0];
        },
        error => {
          console.log(error);
        }
      );
  }
  voteUp(postData: { image_id: string; value: 1 }) {
    console.log("check cat?", this.loadCat);
    console.log("check cats?", this.loadCats);

    this.http.post("https://api.thecatapi.com/v1/votes", postData).subscribe(
      response => {
        console.log("any response", response);
      },
      error => {
        console.log(error);
      }
    );
    let cats = this.loadCats;
    this.loadCat = cats[Math.floor(Math.random() * 101)];
  }
  voteDown(postData: { image_id: string; value: 0 }) {
    console.log("chech cat?", this.loadCat);
    this.http.post("https://api.thecatapi.com/v1/votes", postData).subscribe(
      response => {
        console.log("any response", response);
      },
      error => {
        console.log(error);
      }
    );
    let cats = this.loadCats;
    this.loadCat = cats[Math.floor(Math.random() * 101)];
  }
}
