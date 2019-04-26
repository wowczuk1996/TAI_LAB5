import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public text = "Test";
  public items$: any;

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }






  }
