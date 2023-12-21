import "./ListaSuspensa.css"

export const ListaSuspensa = (props) => {
    return(
        <div className="lista-suspensa">
            <label htmlFor={props.label}>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} name={props.label} id={props.label} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item.nome}>{item.nome}</option>)}
            </select>
        </div>
    )
}