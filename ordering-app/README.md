# NestJS MongoDB RabbitMQ  Docker

A microservices application using RabbitMQ as our message broker
Application based on NestJS, where MongoDB a database.
All this is packed in Docker-Compose, in Docker we use bitnami/mongodb.
All the most interesting is in the documentation. 📗

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
      <a href="https://www.mongodb.com/">
      <img height="50" alt="PostgresSQL" src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"/>
      </a>
      <br />
      MongoDB
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://www.rabbitmq.com/">
      <img height="50" alt="TypeORM" src="https://seeklogo.com/images/R/rabbitmq-logo-25641A76DE-seeklogo.com.png"/>
      </a>
      <br />
      RabbitMQ
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://www.docker.com/">
      <img height="50" alt="Docker" src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"/>
      </a>
      <br />
      Docker
    </td>
  </tr>
</table>

## Key Features

- Authentication and Authorization
  - Registration, create user
  - Login
- Orders
  - Create a orders with fields product name price and phone number
  - Update order
  - Delete order

## API Usage

Check [Orders API Documentation](https://documenter.getpostman.com/view/25263444/2s93RKzFtj) for more info.

## Installation and launch method

Rename .env file, and set your variables for example:

```dotenv
MONGODB_URI=mongodb://root:password123@mongodb-primary:27017/
PORT=3000
RABBIT_MQ_URI=amqp://rabbitmq:5672
RABBIT_MQ_BILLING_QUEUE=billing
JWT_EXPIRATION=3600
JWT_SECRET=you-super-secret😏
RABBIT_MQ_AUTH_QUEUE=auth
```

## Using Docker

Follow the command:

```shell
docker-compose up
# -d - For launch in the background
# --build - for build containers
```
