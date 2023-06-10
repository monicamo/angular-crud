import { ThoughtService } from './../thought/thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss']
})
export class CreateThoughtComponent implements OnInit {

  public pensamento: Thought = {} as Thought;

  constructor(private thoughtService: ThoughtService, private router: Router) { }

  ngOnInit(): void { }

  onSave() {
    this.thoughtService.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamentos']);
    });
  }

}
