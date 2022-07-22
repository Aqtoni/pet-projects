#NestJS PostgreSQL GraphQL Typeorm Docker

A simple Backend application based on NestJS, where PostgreSQL acts as a database to control the base
TypeORM is used, Graphql is used as a query language. All this is packed in Docker-Compose

<table width="100%">
  <tr>
    <td align="center" valign="middle" width="17%">
      <a href="https://nestjs.com/">
        <img height="50" alt="NestJS" src="https://hsto.org/getpro/habr/post_images/d11/98b/ac8/d1198bac8e4ced0d89d5e5983061f418.png"/>
      </a>
      <br />
      NestJS
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://www.postgresql.org/">
      <img height="50" alt="PostgresSQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"/>
      </a>
      <br />
      PostgresSQL
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://graphql.org/">
      <img height="50" alt="GraphQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"/>
      </a>
      <br />
      GraphQL
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://typeorm.io/">
      <img height="50" alt="TypeORM" src="https://www.zoneofit.com/wp-content/uploads/2021/06/type-orm.png"/>
      </a>
      <br />
      TypeORM
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://www.docker.com/">
      <img height="50" alt="Docker" src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png"/>
      </a>
      <br />
      Docker
    </td>
  </tr>
</table>

## Installation and launch method

Copy the repository to yourself

```shell
git clone https://github.com/mogilevtsevdmitry/angular-nestjs-postgresql-typeorm-graphql-docker.git
```

Create a repository at the root .env file, for example:

```dotenv
API_PORT=3001
API_HOST=http://localhost:
TYPEORM_CONNECTION=postgres
TYPEORM_USERNAME=admin
TYPEORM_PASSWORD=123456
TYPEORM_DATABASE=Account-manager
TYPEORM_PORT=5432
TYPEORM_HOST=localhost
```

### Using Docker

Follow the command:

```shell
docker-compose up
# -d - For launch in the background
# --build - for build containers
```

### Without Docker

- Install postgreSQL with an official [site](https://www.postgresql.org/)
- Create a server copy and database, add the user and password as indicated in the .env file
- Make sure PostgreSQL is launched and works
- Install dependencies

### Backend

```shell
cd backend/

# yarn package manager
yarn install
yarn start

# npm package manager
npm install
npm run start
```
