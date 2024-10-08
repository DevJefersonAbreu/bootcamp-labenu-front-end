import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";

const listaDeTarefasInicial = [
  {
    titulo: "Fazer exercícios"
  },
  {
    titulo: "Estudar React"
  }
];

export function ListaTarefas() {
  const [lista, setLista] = useState(listaDeTarefasInicial);
  const [novaTarefa, setNovaTarefa] = useState({ titulo: "" });

  const onChangeTarefa = (event) => {
    const tarefa = {
      titulo: event.target.value
    };

    setNovaTarefa(tarefa);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa({ titulo: "" });
  };

  const removeTarefa = (tarefaParaRemover) => {
    const listaFiltrada = lista.filter(
      (tarefa) => tarefa.titulo !== tarefaParaRemover.titulo
    );
    setLista(listaFiltrada);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa.titulo}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa.titulo}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
    </ListaTarefasContainer>
  );
}

<TaskInput
  placeholder="Digite aqui uma tarefa"
  value={novaTarefa.titulo}
  onChange={onChangeTarefa}
  onKeyPress={(event) => {
    if (event.key === "Enter") {
      adicionaTarefa();
    }
  }}
/>


import React from 'react';
import { TarefaCompletada, ListaCompletadaContainer } from './styled';

export function TarefasCompletadas({ tarefasCompletadas }) {
  return (
    <ListaCompletadaContainer>
      <ul>
        {tarefasCompletadas.map((tarefa, index) => (
          <TarefaCompletada key={index}>
            <p>{tarefa.titulo}</p>
          </TarefaCompletada>
        ))}
      </ul>
    </ListaCompletadaContainer>
  );
}

