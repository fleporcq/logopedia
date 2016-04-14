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
Three containers are created:
 - `symfony_application`
 - `symfony_database`
 - `symfony_phpmyadmin`

Composer is installed in `symfony_application` container.

To enter in bash mode in `symfony_application` container:

```bash
# exec bash into the running container 'symfony_application'
docker exec -it symfony_application bash
# or start a new application container to run bash
# --rm option is for remove container after exiting bash
docker-compose run --rm application bash

# once logged in the container :
# run composer
me@symfony-container/var/www/html$ composer [command]
# run Symfony bin/console
me@symfony-container/var/www/html$ php bin/console [command]
```

### HTTP services

If you didn't change ports mapping in `docker-compose.yml`:
 - The Symfony project is accessible from http://localhost:81
 - PHPMyAdmin is accessible from http://localhost:82

### Database

The `symfony_database` container runs a MySQL server which store data
in the `./docker/mysql/data` volume.

### Configuration

To override php configuration, feel free to edit `./php.ini`.  
You can also edit the Symfony project's apache virtualhost file `./vhost.conf`.

You must restart application service after any changes in these files.

```bash
docker-composer restart application
```
### Notes

If you want build your own image of application service instead of pulling from fleporcq/symfony :

```bash
# build application service image from ./docker/symfony/Dockerfile
# instead of pulling from fleporcq/symfony
docker-compose build application
```

## Symfony  - first steps

```bash
# exec bash into the running container 'symfony_application'
docker exec -it symfony_application bash

# once logged in the container :
# install project dependencies with composer
# when composer ask for the database keep all default params except for host,
# fill this value with 'database' (the docker link to database container)
me@symfony-container/var/www/html$ composer update
# create the project database
me@symfony-container/var/www/html$ php bin/console doctrine:database:create
# create the project schema
me@symfony-container/var/www/html$ php bin/console doctrine:schema:create
# install node modules
me@symfony-container/var/www/html$ npm install
# install bower dependencies
me@symfony-container/var/www/html$ bower install
# run default grunt task
me@symfony-container/var/www/html$ grunt
```
