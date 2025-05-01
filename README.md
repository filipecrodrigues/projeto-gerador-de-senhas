# Gerador de Senhas
Um aplicativo web moderno que permite aos usuários criar contas com senhas seguras e personalizadas, automaticamente geradas conforme os critérios escolhidos pelo usuário.
<br>
<br>
Descrição
Este projeto é uma página de cadastro com um gerador de senhas integrado. Os usuários podem criar uma conta fornecendo nome, e-mail e senha, com a opção adicional de gerar uma senha segura e aleatória de acordo com parâmetros personalizáveis.
<br>
<br>
Funcionalidades

Formulário de Cadastro completo com campos para nome, e-mail e senha
Gerador de Senhas Personalizado com opções para:

<br>
Definir o comprimento da senha
<br>
Incluir/excluir letras maiúsculas
<br>
Incluir/excluir letras minúsculas
<br>
Incluir/excluir números
<br>
Incluir/excluir símbolos especiais
<br>
<br>
Visualização de Senha - botão para alternar entre mostrar ou ocultar a senha
<br>
Copiar Senha - botão para copiar a senha gerada para a área de transferência
<br>
Interface Responsiva - funciona em dispositivos desktop e mobile
<br>
<br>
Tecnologias Utilizadas
<br>
<br>
HTML5 - Estrutura da página
<br>
CSS3 - Estilização e layout responsivo
<br>
JavaScript - Lógica de interação e geração de senhas
<br>
Font Awesome - Ícones
<br>
Google Fonts - Fonte Poppins
<br>

<br>
Instalação
<br>
Clone o repositório:
bashgit clone https://github.com/seu-usuario/gerador-de-senhas.git
<br>
Navegue até o diretório do projeto:
bashcd gerador-de-senhas
<br>
Abra o arquivo index.html no seu navegador ou use um servidor local como Live Server (VSCode).
<br>
<br>
Como Usar

Preencha o formulário com seu nome e e-mail
Para criar uma senha automaticamente:

Clique em "Clique aqui" ao lado de "Criar uma senha segura?"
Configure as opções de senha desejadas
Clique em "Criar"
A senha gerada aparecerá abaixo
Use o botão "Copiar" para copiar a senha para a área de transferência


Você também pode alternar a visibilidade da senha no campo de confirmação clicando no ícone de olho

<br>
<br>
Estrutura do Projeto
<br>
/<br>
├── css/<br>
│  └── styles.css<br>
├── img/<br>
│   └── icon-senha.png<br>
├── js/<br>
│   └── scripts.js<br>
└── index.html<br>
<br>
<br>
Detalhes Técnicos
<br>
O gerador de senhas utiliza algoritmos de geração aleatória baseados em JavaScript para criar senhas seguras. O algoritmo:

Gera caracteres aleatórios de acordo com as opções selecionadas pelo usuário
Garante que a senha tenha exatamente o comprimento solicitado
Inclui pelo menos um caractere de cada tipo selecionado (maiúsculas, minúsculas, números, símbolos)
<br>
<br>
Segurança

O projeto é executado inteiramente no navegador do cliente, sem envio de senhas para servidores externos
O algoritmo de geração de senhas utiliza funções aleatórias nativas do JavaScript para maior segurança
As senhas são exibidas como texto apenas quando o usuário explicitamente solicita através do botão de visualização
<br>
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para melhorias e correções de bugs.
