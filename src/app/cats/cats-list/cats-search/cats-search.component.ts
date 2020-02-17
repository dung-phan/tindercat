import { Component, OnInit } from "@angular/core";
import { CatsSearchService } from "./cats-search.service";
import { Subject } from "rxjs";
@Component({
  selector: "app-cats-search",
  templateUrl: "./cats-search.component.html",
  styleUrls: ["./cats-search.component.css"],
  providers: [CatsSearchService]
})
export class CatsSearchComponent implements OnInit {
  results;
  searchTerm$ = new Subject<string>();
  constructor(private searchService: CatsSearchService) {
    this.searchService.search(this.searchTerm$).subscribe(results => {
      console.log(results);
      this.results = results;
    });
  }

  ngOnInit(): void {}
}
