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
 
 2: BFF (NestJS + Apollo Server)
 ====
 1.1 安装NestJS CLI， 并新建项目    
 npm i -g @nestjs/cli   
 nest BFF   
 1.2 安装Apollo Server    
 npm i --save @nestjs/graphql graphql-tools graphql apollo-server-express   
 1.3 这里我们采用code first，通过代码生成GraphQL schema
 nest generate module tasks   
 nest generate resolver tasks   
 nest generate service tasks    
 执行npm run的时候，系统会自动解析resolver，生成schema.gql
 1.4 安装npm install apollo-datasource-rest，并使用其中的RESTDataSource请求.net core web api

  <font color=Blue>我是蓝色</font>

  <font color=#0099ff size=7 face="黑体">color=#0099ff size=72 face="黑体"</font>

 
