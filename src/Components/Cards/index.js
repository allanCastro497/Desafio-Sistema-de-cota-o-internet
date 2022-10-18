import {React, Component } from "react";
import DadosCliente from "./DadosCliente";

class Cards extends Component {

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
        this.voltarEtapa = this.voltarEtapa.bind(this);
    }

    voltarEtapa() {
        this.props.pegaPermissaoVoltar(false);
    }

  render() {
    return(
    <div>
        <DadosCliente cep={this.state.cadastro.cep} nome={this.state.cadastro.nome} email={this.state.cadastro.email} telefone={this.state.cadastro.telefone}
                     logradouro={this.state.logradouro} bairro={this.state.bairro} localidade={this.state.localidade} uf={this.state.uf} />
        <div className="md:columns-3 sm:columns-2 mt-4">
            <div className="border rounded-md p-4 flex justify-center flex-col ">
                <h2 className="text-center text-bold text-2xl font-bold mb-4">Banda larga 50Mb</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis nec tortor in dignissim. Praesent erat eros, faucibus eget commodo vel, commodo a est.</p>
                <button className="mt-6 rounded-md border px-4 py-1 hover:bg-sky-700 hover:text-white">Quero este plano</button>
            </div>
            <div className="border rounded-md p-4 flex justify-center flex-col mt-2">
                <h2 className="text-center text-bold text-2xl font-bold mb-4">Banda larga 100Mb</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis nec tortor in dignissim. Praesent erat eros, faucibus eget commodo vel, commodo a est.</p>
                <button className="mt-6 rounded-md border px-4 py-1 hover:bg-sky-700 hover:text-white">Quero este plano</button>
            </div>
            <div className="border rounded-md p-4 flex justify-center flex-col mt-2">
                <h2 className="text-center text-bold text-2xl font-bold mb-4">Banda larga 300Mb</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis nec tortor in dignissim. Praesent erat eros, faucibus eget commodo vel, commodo a est.</p>
                <button className="mt-6 rounded-md border px-4 py-1 hover:bg-sky-700 hover:text-white">Quero este plano</button>
            </div>
        </div>
        <div className="flex flex-row justify-end">
        <button onClick={this.voltarEtapa} className="mt-6 rounded-md border px-4 py-1 hover:bg-sky-700 hover:text-white">Ops, errei meu cep!</button>       
        </div>
    </div>
    )
  }

}

export default Cards;