参考：   
https://docs.nestjs.com/graphql/quick-start   
https://www.apollographql.com/docs/react/get-started/   
https://www.apollographql.com/docs/tutorial/data-source/    

SSR:
https://www.digitalocean.com/community/tutorials/react-server-side-rendering
https://blog.smartcodehub.com/server-side-rendering-with-react/
https://blog.somewhatabstract.com/2020/03/02/static-router-static-assets-serving-a-server-side-rendered-site

GraphQL优势：
----
1：BFF层实现数据聚合    
2：与React Hook结合，不需要Redux Saga就可以实现action与reducer间的异步数据读取    

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
 注意：RESTDataSource必须在app.module.ts -> GraphQLModule.forRoot 方法中注册   
 GraphQLModule.forRoot({    
      autoSchemaFile: 'schema.gql',   
      debug: true,    
      playground: true,   
      dataSources: () => ({   
        tasksAPI: new TaskMicoServiceAPI()    
      }),   
    }),   
    
   3: Service (.net core)
   ====
   3.1 dotnet new webapi    
   3.2 添加TaskController.cs    
   3.3 comment out：   
   //app.UseHttpsRedirection();   
   
   最后，依次运行Service，BFF和Client    
  
  

 4: Client-SSR
 ===
 要点
 4.1 Index.js中的 ReactDOM.render 改为 ReactDOM.hydrate， SSR下的渲染必须使用ReactDOM.hydrate    
 4.2 Server -> server.js -> app.get 方法要把会使用到的路径都加进去。  但不能用 /* 的方式，因为这样会把其他所有资源文件，如css, 图片都包括进来。   
 4.3  Server -> index.js 里面用到三个 dev dependencies： ignore-styles， @babel/register， @babel/preset-env， @babel/preset-react 需要单独安装。 
      ingore-style是让webpack不要编译css和图片文件，因为SSR下没有real dom，编译会报错。   
 4.4  SSR下不能使用BrowserRouter或HashRouter，因为没有window.navigation对象。 所以react-route-dom提供了StaticRouter				
 4.5  为了在renderToString时能使用async/await, 要在webpack配置中增加		
   plugins: [		
    '@babel/transform-runtime'		
  ]		
 4.6 一种SEO可能性的思考：React项目编译为multi-output, 某些页面需要SEO，有些不需要。 对需要SEO的页面，在express端，先获取到数据，通过props传递给对应页面，然后res.send发送给前端。		
 
 5: Client-Test
 ===
 5.1 npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer		
 5.2 src文件夹下 -> 新建setupTests.js		

import { configure } from 'enzyme';		
import Adapter from 'enzyme-adapter-react-16';		
configure({ adapter: new Adapter() });		

5.3 shallow、mount示例: header.test.js				

 
 6: ReactWebpack
 ===		
 how to build react with webpack + babel				
 reference: https://www.valentinog.com/blog/babel/				
 
 7：Qianqun微前端		
 ===
 Main：基座项目(Vue)		
 One：子项目(Vue)		
 Two: 子项目(Vue)		
 Three: 子项目(React)		
 
 
 
 
 
 
 
 
 
