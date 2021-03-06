import { isNull } from 'util';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nome: string;
  telefone: string;
  envioOK = false;
  hasError = false;
  phoneHasError = false;
  help = false;
  msgError = 'Preencha os dados corretamente!';
  loading: boolean;

  constructor(private uService: UserService) { }

  ngOnInit() {
  }

  face() {
    window.open(
      'https://www.facebook.com/supercopac/',
      '_blank'
    );
  }

  isValid(s: string): boolean {
    if (isNull(s) || s === '' || s === undefined ) {
      return false;
    }
    return true;
  }
  
  phoneIsValid(s: string): boolean {
    if (isNull(s) || s === '' || s === undefined || s.length < 10) {
      return false;
    }
    this.phoneHasError = false;
    alert(s.length);
    return true;
  }

  save() {
    if (this.isValid(this.nome) && this.phoneIsValid(this.telefone) && false) {
      this.loading = true
      // alert(this.nome + this.telefone);
      this.uService.envioWhats(this.nome, this.telefone).subscribe(resp => {
        this.loading = false;
        if (resp.status) {
          this.envioOK = true;
          this.phoneHasError = false;
          this.hasError = false;
          this.telefone = '';
          this.nome = '';
        } else {
          this.msgError = resp.msg;
          this.hasError = true;
        }
      });
    } else {
      this.hasError = true;
    }
  }

  whats() {
    window.open(
      'http://api.whatsapp.com/send?phone=555136584137&text=Olá, peguei seu contato no site',
      '_blank'
    );
  }

  showHelp() {
    document.querySelector('.alert-info.help').classList.toggle('show');
  }

  nextFocus() {
    document.getElementById('number').focus();
  }

}
