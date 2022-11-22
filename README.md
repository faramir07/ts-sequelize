// pasos para inicialisar un proyecto ts-sequelize, express, postgreSQL

# $ npm init -y
# $ npm i  typescript @types/node ts-node ts-node-dev -D
# $ npm i express dotenv
# $ npm i sequelize pg pg-hstore
# $ tsc --init  crea el archivo tsconfig.json
# touch .gitignore
# $ touch .env
# $ npm i sequelize-cli -D
# npx sequelize-cli init
# $ npm i --save-dev @types/express
# npm run dev
 npx sequelize-cli model:generate --name User --attributes name:string