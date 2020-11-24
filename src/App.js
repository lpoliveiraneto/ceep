import React, { Component } from 'react';
import { ListaDeNotas } from "./components/ListaDeNotas/ListaDeNotas";
import { FormularioCadastro } from "./components/FormCadastro/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component{
  
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  /*
  criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [ ...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    };
    this.setState(novoEstado);
  }

  deletarNotar(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
    
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategoria = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state, categorias:novoArrayCategoria};
    this.setState(novoEstado);
  }*/

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota} 
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria={this.categorias.adicionarCategorias}
            categorias={this.categorias.categorias} />
          <ListaDeNotas 
            apagarNota={this.notas.apagarNota}  
            notas={this.notas.notas}
          />
        </main>
        
      </section>
    );
  }
  
}

export default App;
