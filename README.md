# Logopedia

## Docker

### Requirements

 - Install docker https://docs.docker.com/engine/installation/
 - Install docker-compose https://docs.docker.com/compose/install/

### Containers

To launch the development containers, run this commands from project directory :

```bash
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
docker exec -it symfony_application bash
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

### Notes

If you want build your own image of application instead of pulling from fleporcq/symfony :

```bash
# build application service image from ./docker/symfony/Dockerfile
# instead of pulling from fleporcq/symfony
docker-compose build application
```
