import { Component, OnInit } from '@angular/core';

import io from 'socket.io-client';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface IMensagem {
  id: string;
  mensagem: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public mensagens: IMensagem[] = [];
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io();
    this.socket.on('novaMensagem', (id: string, mensagem: string) => {
      this.mensagens.push({
        id,
        mensagem,
      });
    });
  }

  ngOnInit(): void {}

  public acaoEnviar(evento: Event, mensagem: HTMLInputElement): void {
    evento.preventDefault();
    this.socket.emit('adicionarMensagem', mensagem.value);
    mensagem.value = '';
  }
}
