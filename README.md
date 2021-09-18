# LogSierra

> “Patience persistence and perseverance.” Thomas Edison

<br />
<p align="center"><img src=".github/logo.svg?raw=true"/></p>

# :pushpin: Table of Contents
* [Description](#memo-description)
* [Made With](#rocket-made-with)
* [Features](#mage-features)
* [Frontend](#nail_care-frontend)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)

# :memo: Description

LogSierra is a tracking time where you can log in and activate yourself. This way, the system will point in time where you have started your journey. When you finish, just go on the system and deactivate yourself.

# :rocket: Made With

* 📗 NodeJS
* ⚙️ Express
* 💠 TypeScript
* 🗃 Postgres
* 🗂 TypeORM
* 📧 Nodemailer
* 🔑 JWT
* 🧪 Jest

# :mage: Features

### Register

  - The user can register with name, email and password;

### Recover Password

  - The user can request a password recover;
  - The recovery link will expire in 2 hours;

### Login

  - The user can log in or out;

### Reports

  - The user can see his login/logout history;
  - The user can see his ActivationIn/ActivationOut history;

### Profile Update

  - The user can update his personal data (name, title, email, password);
  - The user can add his github profile;
  - The user can delete ALL his personal data;

### Future Features

  - The system will cache all reposts on Redis for increse performance;

### EndPoints

  - `POST` `http://localhost:3000/users`
  - `POST` `http://localhost:3000/sessions`
  - `POST` `http://localhost:3000/password/forgot`
  - `POST` `http://localhost:3000/password/reset`
  - `GET` `http://localhost:3000/actives/active-on`
  - `GET` `http://localhost:3000/actives/active-off`
  - `GET` `http://localhost:3000/actives/list`
  - `PUT` `http://localhost:3000/actives/profile`
  - `GET` `http://localhost:3000/actives/profile`
  - `GET` `http://localhost:3000/logs/list`
  - `GET` `http://localhost:3000/logs/logout`

### Design Database

<br />
<p align="center"><img src=".github/db.png?raw=true"/></p>

# nail_care: Frontend

[Frondend Repository](https://github.com/marcosvaldeni/LogSierra)

[Project designed on Figma](https://www.figma.com/file/RjiJK8Qy0ACzMEL8VzrDjA/LogSierra?node-id=0%3A1)

# :construction_worker: Installation

**You need to install at least [NodeJS 14.17.6](https://nodejs.org/en/download/) and a Package Manager ([Yarn](https://classic.yarnpkg.com/en/docs/install/) or [NPM](https://docs.npmjs.com/)) and [Postgres](https://www.postgresql.org/download/), I would recommend use [Docker](https://www.docker.com/get-started).**

**In order to clone the project via HTTPS, run this command:**

```git clone https://github.com/marcosvaldeni/log-sierra.git```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have an SSH key registered in your Github account, clone the project using this command:

```git clone github.com/marcosvaldeni/log-sierra.git```

### Database

**In case, you are using a Postgres local, you must have a database named as `logsierra`**

Suggesting using the follow commands:
```
DROP DATABASE if exists logsierra;
CREATE DATABASE logsierra;
```

**In case, you are using Docker, just run the follow command**

```
docker run \
  --name my_postgres \
  -e POSTGRES_PASSWORD=my_password \
  -e POSTGRES_USER=my_user_name \
  -e POSTGRES_DB=logsierra \
  -p 5432:5432 \
```

name `[name of the container]` \
POSTGRES_PASSWORD=`[password ot the database]` \
POSTGRES_USER=`[username of the database]` \
POSTGRES_DB=`[database name]`

**Environment Variables**

Rename the file `.env.example` to `.env`, in this file you must set the same credential used on the Postgres database or/and Docker.

```
  APP_SECRET=dbad479cc6b946f3d6593b3e19b995d9
  APP_WEB_URL=http://localhost:3000

  DATABASE_URL = postgres://my_user_name:my_password@localhost:5432/logsierra
  ENTITIES = ./src/modules/**/infra/typeorm/entities/*.ts
  MIGRATIONS = ./src/shared/infra/typeorm/migrations/*.ts
  MIGRATIONSDIR = ./src/shared/infra/typeorm/migrations
```

  APP_SECRET=`[JWT key, this case I am using md5 hash]`
  APP_WEB_URL=`[application address]`

  DATABASE_URL = postgres://`[username of the database]`:`[password ot the database]`@localhost:5432/`[database name]`


**Install Dependencies**

In the project directory, you have to run:

On Yarn: `yarn`

On NPM: `npm i`

This command will install all dependencies. It may take a while.

# :runner: Getting Started

**Starting**

In the project directory, you can run:

`yarn dev` or `npm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

It shoud shows:

```{"message":"LogSierra"}```

This message means the API is running!

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the [LogSierra](https://github.com/marcosvaldeni/log-sierra/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/marcosvaldeni/log-sierra/blob/master/CONTRIBUTING.md) to find out about the coding standards.

# :tada: Contributing

Check out the [contributing](https://github.com/marcosvaldeni/log-sierra/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

Released in 2021.
This project is under the [MIT license](https://github.com/marcosvaldeni/log-sierra/blob/master/LICENSE).

Made with love by [Marcos Lucas](https://github.com/marcosvaldeni) 💚🚀
