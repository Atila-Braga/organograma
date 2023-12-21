import "./CampoTexto.css"

export const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input value={props.valor} id={props.label} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
};