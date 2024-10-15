import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';
import { error } from 'console';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  private buscaPorId(id: string) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );
    if (!possivelUsuario) {
      throw new Error('Usuario não encontrado');
    }
    return possivelUsuario;
  }

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }
  async getUsers() {
    return this.usuarios;
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario != undefined;
  }

  async atualizaUser(id: string, dadosAtualizacao: Partial<UsuarioEntity>) {
    const usuario = this.buscaPorId(id);

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuario[chave] = valor;
    });
    return usuario;
  }

  async deletaUser(id: string) {
    const usuario = this.buscaPorId(id);
    this.usuarios = this.usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );
    return usuario;
  }
}
