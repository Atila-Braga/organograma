import "./CampoTexto.css"

export const CampoTexto = ({type = "text", label, placeholder, valor, aoAlterado, obrigatorio = false}) => {

    return (
        <div className="campo-texto">
            <label htmlFor={label}>{label}</label>
            <input 
                type={type} 
                value={valor} 
                id={label} 
                onChange={event => aoAlterado(event.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    );
};