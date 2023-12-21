import "./Time.css"
import { Colaborador } from "../Colaborador/Colaborador"

export const Time = ({nome, corPrimaria, corSecundaria, colaboradores}) => {
    return (
            (colaboradores.length > 0) && <section style={{backgroundColor: corSecundaria}} className="times">
                <h3>
                    {nome}
                    <div style={{display: "block", width: "32px", height: "4px", backgroundColor: corPrimaria, marginTop: "10px"}}></div>
                </h3>
                {colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} cor={corPrimaria}/>)}
            </section>
    )
}