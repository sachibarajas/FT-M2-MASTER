import React from 'react';
// import styled from 'styled-components';
import Styled from 'styled-components';


const DivButtons = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100hw;`;

const Buttons = Styled.button`
  border-radius: 5px;
  margin: 10px;
  padding: 5px;`;

export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <DivButtons>
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
      </DivButtons>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }
