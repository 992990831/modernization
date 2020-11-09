import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

//Style继承
const BaseButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const DerivedButton = styled(BaseButton)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
      <Button>Normal</Button>
      <Button primary>Normal</Button>
      <hr></hr>
      <BaseButton>Base</BaseButton>
      <DerivedButton>Derived</DerivedButton>
      <hr></hr>
      <span>as关键字是用来转换styled component为别的类型的属性。 这里就是把button类型变为a(link)类型</span>
      <Button as="a" href="/">Link with Button styles</Button>
      <hr></hr>
      <span>这个类型转换也适用于自定义组件</span>
      <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
      <hr></hr>
      <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </div>
      <hr></hr>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      <hr></hr>
      
    </>
  );
}

export default App;
