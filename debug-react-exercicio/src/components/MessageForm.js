import { useState } from "react";
import {
  MessageFormContainer,
  sendButton,
  TextInput,
  UserSelect
} from "./StyledMessageForm";

function MessageForm(props) {
  const [userValue, setUserValue] = useState("eu");
  const [textValue, setTextValue] = useState("");

  const onChangeUser = (event) => {
    setUserValue(event.target.value);
  };

  const onChangeText = (event) => {
    setTextValue(event.target.valeu);
  };

  const onSendMessage = (event) => {
    event.preventDefault();
    const message = {
      user: userValue,
      text: textValue
    };

    props.addMessages(message);

    setTextValue("");
  };

  return (
    // desafio: com a tag form é possível fazer o envio da mensagem com o botão "enter"
    <MessageFormContainer>
      <UserSelect type="text" onchange={onChangeUser} value={userValue}>
        <option>eu</option>
        <option>Turma</option>
      </UserSelect>

      <TextInput
        type="text"
        placeholder={"Mensagem"}
        onChange={onChangeText}
        value={textValue}
      />
      <sendButton onSubmit={onSendMessage}> Enviar</sendButton>
    </MessageFormContainer>
  );
}

export default MessageForm;

const onChangeText = (event) => {
    setTextValue(event.target.value); // Corrigir para 'value'
  };
  
  // O nome do componente 'sendButton' deve ser corrigido para 'SendButton'
  const [messages, setMessages] = useState([]); // Inicializar como array vazio

<MessageForm addMessage={addMessage} /> // Corrigir para 'addMessage'

const deleteMessage = (message) => {
    const filterResult = messages.filter((msg) => msg !== message); // Corrigir o filtro para remover a mensagem correspondente
    setMessages(filterResult);
  };
 