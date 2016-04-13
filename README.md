# Logopedia

## Docker

### Requirements

 - Install docker https://docs.docker.com/engine/installation/
 - Install docker-compose https://docs.docker.com/compose/install/

### Containers

To launch the development containers, run this commands from project directory :

```bash
# pull images from docker hub
docker-composer pull
# launch containers. you can use -d option to run in detached mode
docker-composer up
```
Three services are created:
 - `application`
 - `database`
 - `phpmyadmin`

Composer is installed in `application` service.

To enter in bash mode in `application` service:

```bash
docker-compose run application bash
# into container :
# run composer
me@symfony-container/var/www/html$ composer [command]
# run Symfony bin/console
me@symfony-container/var/www/html$ php bin/console [command]
```

### HTTP services

If you didn't change ports mapping in `docker-compose.yml`:
 - The Symfony project is accessible from http://localhost:81
 - PHPMyAdmin is accessible from http://localhost:82

### Configuration

To override php configuration, feel free to edit `./php.ini`.  
You can also edit the Symfony project's apache virtualhost file `./vhost.conf`.

You must restart application service after any changes in these files.

```bash
docker-composer restart application
```

### Symfony  - first steps

```bash
docker-compose run --rm application bash
# Into container :
# Install project dependencies composer
# when composer ask for the database keep all default params except for host,
# fill this value with 'database' (the docker link to database container)
me@symfony-container/var/www/html$ composer update
# create the project database
me@symfony-container/var/www/html$ php bin/console doctrine:database:create
# create the project schema
me@symfony-container/var/www/html$ php bin/console doctrine:schema:create
```

### Notes

If you want build your own image of application instead of pulling from fleporcq/symfony :

```bash
# build application service image from ./docker/symfony/Dockerfile
# instead of pulling from fleporcq/symfony
docker-compose build application
```
