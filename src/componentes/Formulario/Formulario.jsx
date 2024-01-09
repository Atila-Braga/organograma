import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao"
import "./Formulario.css";
import { useState } from "react";

export const Formulario = (props) => {
    
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado(
            {
                nome,
                cargo,
                imagem,
                time
            }
        );
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h1>{props.title}</h1>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao> Criar card </Botao>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.aoTimeCadastrado({nome: nomeTime, cor: corTime})
                setNomeTime("");
                setCorTime("");
            }}>
                <h1>Preencha os dados para criar um novo time.</h1>
                <CampoTexto
                    obrigatorio
                    label="Nome do time"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto
                    obrigatorio
                    type="color"
                    label="Cor do time"
                    placeholder="Digite a cor do seu time"
                    valor={corTime}
                    aoAlterado={setCorTime}
                />
                <Botao> Criar um novo time </Botao>
            </form>
        </section>
    )
}