1: Client (React + Apollo Client)
====
1.1 create-react-app client <br/>
1.2 cd client <br/>
1.3 npm install @apollo/client graphql <br/>
安装后的package.json，注意apollo/client的版本。 3.2.2 与 之前的2.6.4差异较大 <br/>
  "dependencies": {   
    "@apollo/client": "^3.2.2",   
    "@testing-library/jest-dom": "^4.2.4",    
    "@testing-library/react": "^9.5.0",   
    "@testing-library/user-event": "^7.2.1",    
    "graphql": "^15.3.0",   
    "react": "^16.13.1",    
    "react-dom": "^16.13.1",    
    "react-scripts": "3.4.3"    
  },    
 <br/>
 1.4 添加TaskList.js    
 import { useQuery, gql } from '@apollo/client';    
 1.5 编辑App.js
 import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';    
 
 
 
