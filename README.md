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
docker exec -it symfony_application bash
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

### Troubleshooting

The `symfony_application` container uses capabilities
which may be not compatible with `aufs` docker storage driver depending your host.  
You can see your storage driver with `docker info`.  
If by default your storage driver is `aufs`, you can use the `devicemapper` storage driver in place.
Export your images and/or containers (because they will be unaccessible unless you revert the following instructions).

To use `devicemapper` storage driver:

Stop docker service: 
```bash
sudo service docker stop
```

Open `/etc/default/docker` and set DOCKER_OPTS with:

```bash
DOCKER_OPTS="-s devicemapper"
```

Restart docker service:

```bash
sudo service docker start
```

See this issue for more details: https://github.com/docker/docker/issues/6980#issuecomment-62723470
