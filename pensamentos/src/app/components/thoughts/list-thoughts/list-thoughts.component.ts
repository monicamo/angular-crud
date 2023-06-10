import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ThoughtService } from '../thought/thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss']
})
export class ListThoughtsComponent implements OnInit {

  public listaPensamentos: Thought[] = [];

  constructor(private thoughtService: ThoughtService) {
    const thoughts = this.thoughtService.listar();
    console.log(thoughts);
  }

  ngOnInit(): void {
    this.thoughtService.listar().subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    });
  }

}
