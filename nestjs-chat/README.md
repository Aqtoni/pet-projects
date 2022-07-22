## NestJS  Socket.io

This is a realtime chat application built with NestJS, React and Socket.io 💬. Nest provides out-of-the-box support for websockets via Socket.io, and in the React application, we're using a Socket.io client to keep the conversations going 🤝.  Users can login and create or join existing chat rooms!
👉 Login now and create or join existing chat rooms! 💬

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
      <a href="https://socket.io/">
      <img height="50" alt="Swagger" src="https://socket.io/images/logo.svg"/>
      </a>
      <br />
      Socket.IO
    </td>
  </tr>
</table>

### Server

- Chat websocket [gateway](https://docs.nestjs.com/websockets/gateways).
- Object schema validation via [pipes](https://docs.nestjs.com/pipes) with [zod](https://github.com/colinhacks/zod).
- Attribute-based access control authorization via [guards](https://docs.nestjs.com/guards) with [CASL](https://casl.js.org/v6/en).

### Client

- Socket.io client to interact with the server through websockets.
- Client/server state management with [Tanstack Query](https://tanstack.com/query/v4).
- CSS styling with [tailwindcss](https://tailwindcss.com/).
- Client-side routing with [Tanstack Location](https://react-location.tanstack.com/).
- Forms with [react-hook-form](https://react-hook-form.com/).
- Object schema validation for events, forms, and more with [zod](https://github.com/colinhacks/zod).

## Installation

```bash
$ yarn
```

## Running the app

```bash
# start client and server in development mode
$ yarn dev

# build client and server for production
$ yarn build

# start server in production
$ yarn start:prodserver
```
