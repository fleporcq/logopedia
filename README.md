# Logopedia

## Docker

### Requirements

 - Install docker https://docs.docker.com/engine/installation/
 - Install docker-compose https://docs.docker.com/compose/install/

To launch the development server :

 - Copy `docker-compose.yml.dist` to `docker-compose.yml`
 - Run this commands from project directory :

```bash
# build images
docker-compose build
# launch containers
docker-composer up
```
Two containers are created `symfony_application` and `symfony_database`.

Composer is installed in `php-apache` container.

To enter in bash mode in `php-apache` container.

```bash
docker exec -it symfony_application bash
```
