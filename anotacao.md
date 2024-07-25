npm init -y
npm i -D typescript ts-node nodemon jest @types/jest @types/node ts-jest
npx tsc --init (alterar target para ES2021)
npx jest --init (ativar preset: 'ts-jest')
npm i -D @typescript=eslint/eslint-plugin @typescript-eslint/parser eslint eslint config-prettier eslint-plugin-prettier