import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  filterText: string;

  @Output() title = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filterText = params["title"];
      this.sendFilter();
    });
  }

  sendFilter() {
    this.router.navigate(["/blog"], {
      queryParams: { title: this.filterText }
    });
    this.title.emit(this.filterText);
  }
}
