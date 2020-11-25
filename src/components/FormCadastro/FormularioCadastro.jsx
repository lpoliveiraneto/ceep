import React, { Component } from "react";
import "./estilo.css";

export class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this.titulo ="";
        this.texto = "";
        this.categoria = "Sem categoria";
        this.state = {categorias:[]}

        this._novasCategorias = this._novasCategorias.bind(this)

    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);

    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);


    }

    _novasCategorias(categorias){
        this.setState({...this.state,categorias})
    }



    _handleMudancaCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}>

                <select onChange={this._handleMudancaCategoria.bind(this)} 
                    className="form-cadastro_input"
                >
                    <option defaultChecked={true}>Sem categoria</option>

                    {this.state.categorias.map( (categoria,index) => {
                        return <option key={index}>{categoria}</option>
                    })}
                </select>
                <input  
                    className="form-cadastro_input" 
                    type="text" placeholder="Titulo" 
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea 
                    className="form-cadastro_input" 
                    placeholder="Escreva sua nota..." 
                    rows={15} 
                    onChange={this._handleMudancaTexto.bind(this)} 
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        );
    }
}