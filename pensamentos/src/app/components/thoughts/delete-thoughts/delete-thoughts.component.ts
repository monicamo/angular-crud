import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from './../thought/thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';

@Component({
  selector: 'app-delete-thoughts',
  templateUrl: './delete-thoughts.component.html',
  styleUrls: ['./delete-thoughts.component.scss']
})
export class DeleteThoughtsComponent implements OnInit {
  public pensamento: Thought = { } as Thought;

  constructor(private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this,this.thoughtService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.thoughtService.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamentos'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamentos'])
  }

}
