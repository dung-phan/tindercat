import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-cats",
  templateUrl: "./cats.component.html",
  styleUrls: ["./cats.component.css"]
})
export class CatsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCat();
  }

  private fetchCat() {
    this.http
      .get("https://api.thecatapi.com/v1/images/search")
      .subscribe(cat => {
        console.log("any cat", cat);
      });
  }
}
