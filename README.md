# PROPOSTA DE ONBOARDING LESTE - Marcus

## 1. Objetivos

Este projeto tem como objetivo: 
(i) exercitar lógica deprogramação; 
(ii) se familiarizar com a stack utilizada no setor;
(iii) se adequar ao padrão de desenvolvimento que vem sendo estabelecido ao longo dos últimos meses. 

O projeto consistirá em desenvolvimento back-end, com o microframework Python Flask, desenvolvimento front-end, com ReactJS, modelagem de dados no MySql, e configuração do servidor web Nginx. O projeto deverá ser executado em uma VM no Proxmox, utilizar o protocolo https, e utilizar um IP configurado na VLAN 42.

## Descrição do projeto

### Back-end

➢ Criar uma API REST simples com Flask

➢ CRUD completo com integração ao banco de dados
(MariaDB/MySQL).

➢ Implementação de autenticação básica, podendo ser local,
sem necessidade de utilizar o LDAP de início (Com opção
de escolha).

### Front-end

➢ Criar uma interface em React conectada ao back-end via
fetch ou axios.

➢ Utilizar React Router para navegação entre páginas.

➢ Adicionar um sistema básico de login.

### Banco de Dados

➢ Criar um banco de dados MariaDB/MySQL com, pelo menos, as
tabelas switches e usuários (autenticação).

### Organização do projeto

➢ Utilizar estrutura padrão no Front-end (/components,
/public, /assets, /utils).

➢ Criar um .env para configuração do ambiente.


### Documentação

➢ Criar um repositório privado no Github para versionar o
projeto;

➢ Criar um README com instruções de uso e exemplos;

➢ Documentar o avanço do projeto pelo Open Project;

➢ Código devidamente comentado;