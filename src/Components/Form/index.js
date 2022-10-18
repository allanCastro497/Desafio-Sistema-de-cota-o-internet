import {React, Component } from "react";
import Formulario from "./Formulário";
import Cards from "../Cards"

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
          cadastro: {
            cep: '',
            nome: '',
            email: '',
            telefone: ''
          },
          logradouro: '',
          bairro: '',
          localidade: '',
          uf: '',
          next: false // Deixar false para permanecer na home
        };
    }

    cadastrar = cadastro => {
      this.setState({cadastro: cadastro})
    }
    pegaEndereco = (logradouro, bairro, localidade, uf) => {
      this.setState({logradouro: logradouro, bairro: bairro, localidade: localidade, uf: uf, next: true})
    }
    pegaPermissaoVoltar = (voltar) => {
      this.setState({next: voltar})
    }

  render() {
    return(
      <div className="my-10">
        <div className="container-md w-3/4 mx-auto flex justify-center">
          { this.state.next === false &&
            <div className="flex-col md:w-1/2 sm:w-full">
              <h1 className="text-2xl mb-2 text-center font-bold">Formulário de cotação de Banda Larga</h1>
              <p className="text-center mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Formulario cadastrar={this.cadastrar} pegaEndereco ={this.pegaEndereco} />
            </div>
          }
          { this.state.next === true &&
            <div>
              <h1 className="text-2xl mb-2 text-center font-bold">Escolha seu plano de Banda Larga</h1>
              <p className="text-center mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Cards cep={this.state.cadastro.cep} nome={this.state.cadastro.nome} email={this.state.cadastro.email} telefone={this.state.cadastro.telefone}
                     logradouro={this.state.logradouro} bairro={this.state.bairro} localidade={this.state.localidade} uf={this.state.uf}
                     pegaPermissaoVoltar={this.pegaPermissaoVoltar} />
            </div>
          }
        </div>
      </div>
    )
  }

}

export default Form;
