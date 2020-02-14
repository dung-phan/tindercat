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
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchCats();
  }

  private fetchCats() {
    this.http
      .get("https://api.thecatapi.com/v1/images/search?format=json&limit=25", {
        headers: { "x-api-key": "516c291b-de24-4785-9578-3ae08088836b" }
      })
      .subscribe(cats => {
        console.log("any cat", cats);
        this.loadCats = cats;
        this.loadCat = cats[0];
      });
  }
  voteUp(postData: { image_id: string; value: 1 }) {
    console.log("check cat?", this.loadCat);
    console.log("check cats?", this.loadCats);

    this.http
      .post("https://api.thecatapi.com/v1/votes", postData)
      .subscribe(response => {
        console.log("any response", response);
      });
    let cats = this.loadCats;
    this.loadCat = cats[Math.floor(Math.random() * 26)];
  }
  voteDown(postData: { image_id: string; value: 0 }) {
    console.log("chech cat?", this.loadCat);
    this.http
      .post("https://api.thecatapi.com/v1/votes", postData)
      .subscribe(response => {
        console.log("any response", response);
      });
    let cats = this.loadCats;
    this.loadCat = cats[Math.floor(Math.random() * 26)];
  }
}
