import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CatsSearchService {
  baseUrl: string = "https://api.thecatapi.com/v1/breeds/";
  queryUrl: string = "search?q=";

  constructor(private http: HttpClient) {}

  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term))
    );
  }

  searchEntries(term) {
    return this.http
      .get(this.baseUrl + this.queryUrl + term)
      .pipe(map(res => console.log("what is res", res)));
  }
}
