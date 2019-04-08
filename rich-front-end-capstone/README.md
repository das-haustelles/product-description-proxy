# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- Create a config.js in the /db/utils directory (remember to not push this file) which exports your MYSql username (var userName = 'your username') and corresponding password (var userPass = 'your username')
  > example: 
  >
  >   const userName = 'your username';
  >
  >   const userPass = 'your password';
  >
  >   module.exports.userName = userName;
  >
  >   module.exports.userPass = userPass;

- Ensure a database named 'fec' is available in your MYSql database
- From the root directory, start the server with 'npm run start', seed the db with 'npm run seedDB'  and create the bundle.js with 'npm run build'

- Navigate to localhost:3001/hostels/:id where ':id' is a number of the hostel from 1 - 100

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

