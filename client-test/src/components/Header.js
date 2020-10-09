import React from 'react';

function Header(props) {
  return (
    <div style={{textAlign:"center"}}>
     {props.showHello? "Hello world!" : "Hi there"}
    </div>
  );
}

export default Header;
