import {React, Component } from "react";
import axios from "axios";

class Formulario extends Component {

    constructor(props){
        super(props);
        this.state = {
            cadastro: {
                cep: '',
                nome: '',
                email: '',
                telefone: ''
            }
        }
        this.urlBaseViaCep = "https://viacep.com.br/ws/"

        this.buscaCep = this.buscaCep.bind(this);
        this.alteraCampos = this.alteraCampos.bind(this)
    }

    buscaCep() {
        axios.get(this.urlBaseViaCep + `${this.state.cadastro.cep}/json`)
            .then(res => {
                let result = res.data;

                this.props.pegaEndereco(result.logradouro, result.bairro, result.localidade, result.uf)
            })
            .catch(err => console.log(err))
    }

    alteraCampos(e) {
        let cadastro = this.state.cadastro;
        cadastro[e.target.name] = e.target.value;
        this.setState({cadastro: cadastro});

        this.props.cadastrar(this.state.cadastro);
    }


  render() {
    return(
        <div className="border p-6">
            <label>CEP:</label><br />
            <input type="text" value={this.state.cadastro.cep} onChange={this.alteraCampos} name="cep" className="p-2 rounded-md w-full border mb-3"/>
            <label>Nome completo:</label><br />
            <input type="text" value={this.state.cadastro.nome} onChange={this.alteraCampos} name="nome" className="p-2 rounded-md w-full border mb-3"/>
            <label>E-mail:</label><br />
            <input type="email" value={this.state.cadastro.email} onChange={this.alteraCampos} name="email" className="p-2 rounded-md w-full border mb-3"/>
            <label>Telefone:</label><br />
            <input type="tel" value={this.state.cadastro.telefone} onChange={this.alteraCampos} name="telefone" className="p-2 rounded-md w-full border"/>
            <button type="submit" onClick={this.buscaCep} className="mt-6 rounded-md border px-4 py-1 hover:bg-sky-700 hover:text-white">Enviar</button>
        </div>
    )
  }

}

export default Formulario;
