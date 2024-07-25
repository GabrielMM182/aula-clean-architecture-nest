npm init -y
npm i -D typescript ts-node nodemon jest @types/jest @types/node ts-jest
npx tsc --init (alterar target para ES2021)
npx jest --init (ativar preset: 'ts-jest')
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint config-prettier eslint-plugin-prettier

## Principais Tecnologias e Ferramentas Utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

- de inicio vamos precisar criar a entidade mais basicas dentro da pasta core (ID por exemplo) core/entity-uuid + entity.ts

- apos isso vamos criar uma pasta shared que vai servir como toda padronizacao dos objetos dentro da classe, nesse caso vamos criar uma padronizacao para o tipo email e ir usando ao longo do codigo

- Criacao da nossa primeira entidade na qual vai ser feito todo o get,set e create referente ao login e criacao de conta