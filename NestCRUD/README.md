# NestJS Prisma PostgreSQL TypeORM Docker

A Backend application based on NestJS, where PostgreSQL acts as a database, to control the base used
Prisma. Also Using passport.js, and json web tokens (JWT). There is also e2e tests in the tests folder.
You can running Database from Docker 🐬 And you can run a second database for tests.
In file `package.json` there is a command for this.

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
      <a href="https://www.docker.com/">
      <img height="50" alt="Docker" src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png"/>
      </a>
      <br />
      Docker
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://www.prisma.io/">
      <img height="50" alt="Prisma" src="https://cdn.cookielaw.org/logos/028e799e-5bb4-4f89-9ce8-1718d42d344c/22c2e2c0-3df0-4958-8672-1194370ee230/542a9b3e-88eb-4f84-95fd-b19e01352169/Logo-Prisma.png"/>
      </a>
      <br />
      Prisma
    </td>
  </tr>
</table>

## Key Features

- Authentication and Authorization
  - Sign Up
  - Login
- Bookmarks
  - User can create a bookmarks
  - Create bookmarks, get, update, delete.
- User
  - Create user, update and change password.

## API Usage

Check [Bookmarks API Documentation](https://documenter.getpostman.com/view/25263444/2s93JtR4Cz) for more info.📗
In postman create a global variable `jwt` for token, and in test write this code:
In the authorization section, select the type of token "Bearer Token"
and write a variable `{{jwt}}`. It will automatically refresh the token.

```
const token = pm.response.json().tokens.access;
pm.globals.set("jwt", token);
```

## Installation and launch method

# Stars the Prisma

To start the Prisma run this command

```shell
$ npx prisma generate
```

You can also run Prisma Studio, by default Prisma run on localhost:5555

```shell
$ npx prisma studio
```

In file .env enter your environment variables

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

### Shell command

```shell
# yarn package manager
yarn install
yarn start

# npm package manager
npm install
npm run start
```
