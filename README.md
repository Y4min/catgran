# Catgran

## Tema

O tema escolhido pelo grupo foi um Instagram para gatos, onde os donos podem acompanhar seus amigos, ver o perfil de outros usuários e criar o próprio perfil.

## Integrantes

- Yasmim Silva de Araújo
- Ana Laura Diniz da Silva
- Lucas Gabriel dos Satos Ferreira
- Marcelo dos Santos Diniz
- Thaynnan Vitória Oliveira Santos

## Descrição

O objetivo do site é que os donos de pets possam publicar fotos de seus amados felinos e ver as fotos de amigos. O usuário se cadastra, monta o seu perfil, navega pelo feed, pesquisa outros perfis e publica as próprias fotos.

## Páginas

O site tem 12 páginas HTML, organizadas em quatro grupos.

### Entrada no site

- **login.html**: tela de cadastro. O usuário informa nome de usuário e senha, e os dados são guardados no `localStorage` pelo `login.js`.
- **login2.html**: configuração do perfil. O usuário escolhe a foto, o nome e a biografia. Ao salvar, o `login2.js` leva para o perfil. Se o cadastro não tiver sido feito, a página volta para o `login.html`.

### Páginas principais (com barra de navegação inferior)

- **feed.html**: página inicial. Mostra a barra de stories no topo e a lista de posts dos outros gatos, com as ações de cada post.
- **pesquisa.html**: tela de exploração, com uma barra de busca que leva ao `pesquisa2.html` e uma grade de fotos de gatos.
- **seu_perfil.html**: perfil do próprio usuário, com foto, nome, biografia, estatísticas (posts, seguidores e seguindo) e grade de posts. Permite publicar uma nova foto por meio de um modal e sair da conta. O `perfil.js` preenche os dados salvos.

### Busca

- **pesquisa2.html**: tela de busca com o campo de pesquisa e a lista de usuários recentes. Cada usuário leva ao perfil dele, e é possível remover itens da lista ou limpar tudo.

### Perfis de outros usuários

Páginas de visualização com a mesma estrutura (foto, nome, estatísticas, biografia e posts), todas estilizadas pelo `perfis.css`:

- **perfil1.html**: cleiton_do_grau
- **perfil2.html**: hiarley_galego
- **perfil3.html**: G3niu.da.computação
- **perfil4.html**: cleiton_fantasias
- **perfil5.html**: everton123
- **perfil6.html**: choqueii

### Fluxo de navegação

```
login → login2 → seu_perfil ⇄ feed ⇄ pesquisa → pesquisa2 → perfil1 a perfil6
```

## Divisão de tarefas

- **Yasmim**: login.css, login.html, login.js, login2.html, login2.js, perfil.css, perfil.js, seu_perfil.html, perfil3.html, perfil6.html, perfil5.html
- **Ana Laura**: perfil1.html, perfil2.html, perfis.css
- **Lucas**: feed.css, feed.html
- **Marcelo**: pesquisa2.html, pesquisa2.css, perfil4.html, perfil5.html
- **Thaynnan**: pesquisa.html, pesquisa.css

## Uso do Flexbox

O Flexbox foi utilizado em quase todas as páginas do projeto.

- **Login:** o `body` centraliza o cartão na tela (`justify-content` e `align-items: center`), e as divs internas organizam foto e campos lado a lado (`flex-direction: row`) ou empilhados (`flex-direction: column`), com `gap` entre eles.
- **Feed:** o Flexbox forma a barra de stories com rolagem horizontal e a lista vertical de posts, e alinha o cabeçalho e as ações de cada post com `space-between` e `align-items: center`.
- **Perfis (o próprio e os de outros usuários):** posiciona a foto ao lado das informações e as estatísticas em linha. No celular (`max-width: 600px`), as estatísticas passam para coluna.
- **Barra de navegação inferior:** repetida no feed, no perfil e na pesquisa, usa `justify-content: space-around` para distribuir os ícones.

As propriedades mais usadas foram `display: flex`, `flex-direction`, `justify-content`, `align-items` e `gap`, além de `flex-shrink: 0` em alguns itens. A grade de fotos do perfil usa CSS Grid, não Flexbox.

## Uso de IA

O grupo utilizou IA para organização de código e para tirar dúvidas ou resolver erros sobre Flexbox, CSS e JavaScript. O código final foi revisado e adaptado pelos integrantes. As decisões sobre cores, páginas, conteúdo, design, organização e ordem foram feitas pelo grupo.
