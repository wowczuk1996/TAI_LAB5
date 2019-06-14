import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  public post = {
    image: "",
    text: "",
    title: ""
  };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  submit() {
    this.dataService.createOrUpdate(this.post).subscribe(f => {
      this.router.navigate(["/blog"]);
    });
  }
}
