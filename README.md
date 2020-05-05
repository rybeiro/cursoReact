# React - Projeto MyApp
## Requisitos mínimos
- Node.js
## Primeiro App
Primeiro crie um diretório com nome de seu app, exemplo: myapp. Entre no diretório e execute o comando para inicializar as configurações.
```
npm init
```
# Preparando o Ambiente - Instalação e configuração
## Instalando o React e React-DOM
Para instalação execute o comando abaixo. Após a instalação será criado o diretório node_modules com as dependências do projeto e o arquivo *package.lock.json* com as informações das versão.
```
npm install react react-dom
```
## Instalando o Bundler 
O *Bundler* é um empacotador que permite escrever um código modular e depois empacotar em pequenos pacotes otimizados. Os mais conhecidos para Node são: *Webpack e o Parcel*.
Inicialmente utilizarei o *Parcel* como dependência de desenvolvimento.
```
npm install --save-dev parcel-bundler
```
## Instalando o Babel
```
npm install --save-dev babel-preset-env babel-preset-react
```
### Configurando o Babel
Crie o arquivo *.babelrc* na raiz do projeto e configuramos com o *preset* que instalamos.
```
{
  "presets": [
    "env",
    "react"
  ]
}
```
### Configurando o package
Configurar o arquivo *package.json* com o *preset*. No objeto *script* vamos limpar o valor e configurar a chave *start* com valor *parcel index.html*
```
"start": "parcel index.html"
```
# Implementando os primeiros arquivos
- Crie o arquivo *index.html* com uma tab ```<div id="root"></div>``` e também uma tab ```<script src="./index.js"></script>```

## Implementação do arquivo index.js
- Importamos a *React* e o *React-DOM*
```
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(
  <h1>Olá Mundo!!!</h1>,
  document.getElementById('root')
);
```
## Inicializando o Server Parcel
Para inicializar o ambiente de desenvolvimento execute o comando:
```
npm start
```
### Personalizando a página com SASS - CSS com super poderes.
Para utilizar basta criar o arquivo e importar no arquivo *index.js*.
```
import "./index.scss"
```
