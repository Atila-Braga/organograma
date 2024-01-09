import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4} from "uuid";

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    }
    ,
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    }
    ,
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    }
    ,
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    }
    ,
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    }
    ,
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    }
    ,
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    }
]);

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, {...colaborador, id: uuidv4()}])
  }

  const aoNovoTimeAdicionado = (time) => {
    setTimes([...times, time])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => { 
      if(time.id === id){
        time.cor = cor;}
        return time;
      }))
  }

  function resolverFavorito (id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
        aoTimeCadastrado={time => aoNovoTimeAdicionado(time)}
        title="Preencha os dados para criar o card do colaborador." 
      />
      {times.map(time => <Time 
        aoFavoritar={resolverFavorito}
        time={time}
        key={time.nome} 
        nome={time.nome}
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        mudarCor={mudarCorDoTime}
        aoDeletar={deletarColaborador}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
