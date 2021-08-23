
<h1 align="center"> Desafio#3 - E-commerce para o cliente UPMedal.com </h1>

<p align="center">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
</p>

## Tópicos
:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Principais Objetivos do projeto](#principais-objetivos)

:small_blue_diamond: [Principais Objetivos do projeto](#como-rodar)

## Descrição do projeto
<p align="justify"> Essa é a minha versão do desafio 3 da **Hiring Coders** usando a plataforma **Vtex IO**. Este projeto também foi construido utilizando **React** e um backend simplificado usando **AWS**. </p>


### Principais Objetivos do projeto
:heavy_check_mark: Construção do modelo do site [UpMedal](https://www.upmedal.com/desafios) usando as ferramentas da **Vtex IO**.

:heavy_check_mark: Criação de servidor de cadastro de leads usando os produtos **dynamodb, lambda** e **API Gateway** da **AWS** .

:heavy_check_mark: Criação do front-end para cadastro das leads. 

:heavy_check_mark: Alteração da admin page para listagem das leads. 

## Pré-requisitos
:warning: Node.js

:warning: yarn

:warning: vtex

## Como rodar a aplicação :arrow_forward:
<p align="justify">A aplicação está disponivel para usúarios da plataforma Hiring Coders/VtexIO.</p>

- Instale o Node.js. Se você estiver usando um MAC, instale também Yarn;
- Execute `npm i -g vtex` em seu terminal se estiver usando Windows ou `yarn global add vtex` se estiver usando MAC;
- Execute `vtex login hiringcoders2021` em seu terminal.
- Depois de fazer login, execute `vtex whoami` para confirmar a conta e a área de trabalho em que você se encontra.
- Execute `vtex use jhelisonupmedal`.
- Finalmente use `vtex link` dentro do projeto.

O projeto também pode ser acessado pelo [link](https://jhelisonexercise1--hiringcoders2021.myvtex.com/).

## Problema do Admin :space_invader:
Durante o desenvolvimento foi encontrado um problema a durante a adição do builder admin. O mesmo apresenta o seguinte erro:

```bash
error: API: 403 Forbidden  
error: Source: https://app.io.vtex.com/vtex.builder-hub/v0/hiringcoders2021/jhelisonupmedal/_v/builder/0/link/hiringcoders2021.jhelisonexercise1@0.1.1  
error: Method: post
error: Message: Account hiringcoders2021 is not allowed for developing app "jhelisonexercise1" in major 0.
You can request access by going to https://forms.gle/f7bYdTA7tfdfB5tt7 .
Find further info at https://vtex.io/docs/releases/2020-02/vtex-io-closed-beta-list
```
Que impossibilita o link da aplicação com os servidores da Vtex.

### Workaround :circus_tent:
Para linkar a aplicação o seguinte workaround deve ser útilizado:
- Remover o `"admin": "0.x"` do `manifest.json`
```json
  "builders": {
	...
    "admin": "0.x"
  },
```

- Usar `vtex link` no terminal
- Ainda com o terminal aberto com o hotload da vtex adicionar o  `"admin": "0.x"` dentro do `manifest.json`

Isso fara com que o modulo pule a verificação da vtex.

## Agradecimento :cake:
Agradeço ao pessoal do Slack por ter ajudado logo quando estava precisando, e ao pessoal do Hiring Codes e Vtex IO pela oportunidade de usar a plataforma.
