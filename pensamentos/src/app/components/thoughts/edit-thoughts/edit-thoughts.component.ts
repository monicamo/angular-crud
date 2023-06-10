import { Component } from '@angular/core';
import { Thought } from '../thought/thought';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought/thought.service';

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.scss']
})
export class EditThoughtsComponent {

  pensamento: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento() {
    this.service.edit(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamentos'])
    })

  }

  cancelar() {
    this.router.navigate(['/listarPensamentos'])
  }

}
