import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "blog-item-text",
  templateUrl: "./blog-item-text.component.html",
  styleUrls: ["./blog-item-text.component.css"]
})
export class BlogItemTextComponent implements OnInit {
  @Input() title: string;
  @Input() id: number;

  constructor() {}

  ngOnInit() {}
}
