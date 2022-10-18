import {React, Component } from "react";

class DadosCliente extends Component {

    constructor(props){
        super(props);
        this.state = {
            cadastro: {
              cep: this.props.cep,
              nome: this.props.nome,
              email: this.props.email,
              telefone: this.props.telefone
            },
            logradouro: this.props.logradouro,
            bairro: this.props.bairro,
            localidade: this.props.localidade,
            uf: this.props.uf,
            next: true
          };
    }

  render() {
    return(
    <div className="my-5">
        <h2 className="text-center font-bold text-xl">Dados cadastrados</h2>
        <p className="text-center">Veja e confirma os seus dados cadastrados anteriormente. Caso haja algum erro, por favor clique em "voltar" para editar as informações:</p>
        
        <div className="md:columns-2 sm:columns-1 py-7">
            <div className="border">
                <p className="text-center"><strong>CEP:</strong> {this.state.cadastro.cep}</p>
            </div>
            <div className="border">
                <p className="text-center"><strong>Nome:</strong> {this.state.cadastro.nome}</p>
            </div>
            <div className="border">
                <p className="text-center"><strong>Email:</strong> {this.state.cadastro.email}</p>
            </div>
            <div className="border">
                <p className="text-center"><strong>Telefone:</strong> {this.state.cadastro.telefone}</p>
            </div>
        </div>
        <h3 className="text-center font-bold text-lg">Dados de endereço</h3>
        <div className="md:columns-2 sm:columns-1 py-7">
            <div className="border">
                <p className="text-center"><strong>Logradouro:</strong> {this.state.logradouro}</p>
            </div>
            <div className="border">
                <p className="text-center"><strong>Bairro:</strong> {this.state.bairro}</p>
            </div>
            <div className="border">
                <p className="text-center"><strong>Localidade:</strong> {this.state.localidade}</p>
            </div>
            <div className="border">
                <p className="text-center"><strong>UF:</strong> {this.state.uf}</p>
            </div>
        </div>
    </div>
    )
  }

}

export default DadosCliente;