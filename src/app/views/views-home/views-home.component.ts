import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  data = [{
    value: 22, label: '# of Users'},
    {value: 999, label: 'Revenue'},
    {value: 50, label: 'Satisfaction Score'}];

  list = [
    {image: '/assets/couch.jpeg', title: 'Couch', description: 'A Couch'},
    {image: '/assets/dresser.jpeg', title: 'Dresser', description: 'A Dresser'}];

  constructor() { }

  ngOnInit() {
  }

}
