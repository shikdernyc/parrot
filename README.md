# Parrot
[![CircleCI](https://circleci.com/gh/gamma-lab/parrot/tree/master.svg?style=svg)](https://circleci.com/gh/gamma-lab/parrot/tree/master)

A conversation engineering tool.

## Getting Started

### Prerequisites
Docker
```
brew cask install docker
```

### Installing
Create 4 files to pass environment variables to the docker containers.

.backend_env
```
MONGODB_URI=mongodb://<username>:<password>@mongodb:27017/parrot
NODE_ENV=development
DEBUG=true
```
.mongodb_root_password
```
<a password for root user>
```
.mongodb_root_username
```
<a username for root user>
```
.mongodb_password
```
<password>
```
.mongodb_username
```
<username>
```

## Running the tests

Only backend has testcase. More tests will be added.

### backend

Move to backend directory

```
npm test
```

## Deployment

`docker-compose up`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

