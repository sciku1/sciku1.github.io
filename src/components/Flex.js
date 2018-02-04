import React, { PureComponent } from 'react';
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  margin: ${props => props.margin || '' };
  padding: ${props => props.padding || '' };
`;

class Flex extends PureComponent {
  render () {
    return (
      <Container {...this.props}>{this.props.children}</Container>
    );
  }
}

export default Flex