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

- Para conseguir utilizar a função abaixo de ter algo opicional vamos criar dentro do core/types/optional que vai ficar responsavel de deixar como opcional, antes de dar o create

- já dentro da entidade dos posts do user vamos ter o SET apenas no allowShare pois ele é o unico que pode ser alterado dentro da regra de negocio já nsfw por exemplo não pode ser alterado apos realizar o post

- a ideia do set e get é parecido com o padrão que temos no crud (get vai funcionar para tudo que queremos exibir usando o metodo GET dentro do http, já o set vai ser tudo relacionado a modificar algo (delete ou update) já o create vai ser o nosso POST)

- vamos criar uma pasta events, para lidar com a parte de data automatica assim que algo for criado, sem precisar criar um campo para isso, já que o post inciialmente não vai te rum post vai ser sempre algo novo e esse evento é adicionado a lista interna _domainEvents e o agregado UserPost é enfileirado no eventDispatcher, esse eventDispacher gerencia os eventos no qual depois ocorre o registro e a monipulacao dos mesmo  para que seja salvo corretamente

Integração com o Restante da Arquitetura
A arquitetura segue um padrão clássico de Clean Architecture onde:

Entities (Entidades): Representam o núcleo da lógica de negócios.
Value Objects (Objetos de Valor): São objetos imutáveis que representam conceitos do domínio, como Email.
Domain Events (Eventos de Domínio): Capturam mudanças no estado do domínio e permitem integração reativa.
Aggregate Roots (Raízes de Agregado): Coordenam as entidades e eventos de domínio, garantindo consistência.

- na maioria dos casos vamos precisar realizar um extends/heranca quando ofr declarar alguma entite em domain se relacioanndo com core

-> Entities / repositories / use-case / spec.ts

repositories (Vamos criar todos os metodos disponiveis para os testes e para criacao da api)

vamos realizar a criacao do service que vai ficar encarregado de realiazar o token para login e tambem criptografar a sanha

- tambem vmaos criar uma pasta chamada test/ na qual vmaos utilizar esse service para montar toda estrutura de teste para a nossa api, ela vai funcionar como teste em memoria realizando todo o crud necessario ou outras implementacoes 

- Utilizar EITHER para validacao de erros, no qual vai ser construida dentro de core, basenado em left como se for algum eror e right para prosseguir com o return 

baseError -> either.ts -> either.spec -> definir erros especificos