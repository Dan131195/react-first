import { Component } from "react";
// 'Component è il più vecchio componente a classe di react

class ClassComponent extends Component {
  render() {
    // render() è obbligatorio nei componenti classe
    // ora possiamo ritornare il jsx
    return (
      <div>
        <h3>Componente a Classe</h3>
        <p>Hello World !</p>
      </div>
    );
  }
}

export default ClassComponent