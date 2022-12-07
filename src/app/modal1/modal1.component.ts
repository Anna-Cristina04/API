import { Component, OnInit } from '@angular/core';
import {Modal1Service} from './modal1.service';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})
export class Modal1Component implements OnInit {

  tags: string[] = [];
  selectedTag: string
  linkImage: string;
  statusCode: string;

  constructor(
    private appService: Modal1Service
  ) {}

  ngOnInit(): void {
    this.appService.getTags()
    .subscribe(tags => {
      console.log(tags);
      this.tags = tags;
    });
  }

  consultar() {
    console.log(this.selectedTag);
    this.linkImage = 'https://http.cat/' + Number(this.statusCode);
  }


}
