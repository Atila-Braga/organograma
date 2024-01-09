import "./Time.css"
import { Colaborador } from "../Colaborador/Colaborador"

export const Time = ({time, nome, cor, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    
    let bgColor = cor + "66"

    return (
            (colaboradores.length > 0) && <section className="times" style={{backgroundColor: bgColor}}>
                <input value={cor} onChange={event => mudarCor(event.target.value, time.id)} type="color" className="input-cor" />
                <h3>
                    {nome}
                    <div style={{display: "block", width: "32px", height: "4px", backgroundColor: cor, marginTop: "10px"}}></div>
                </h3>
                {colaboradores.map((colaborador, indice) => {
                        return (
                        <Colaborador 
                            colaborador={colaborador} 
                            indiceDoColaborador={indice} 
                            key={indice} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            cor={cor} 
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />);
                })}
            </section>
    )
}