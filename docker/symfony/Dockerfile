FROM php:5.6-apache

# zlib1g package and zip php extension is for composer
# libicu is for intl
RUN apt-get update && apt-get install -y \
    libicu-dev \
    zlib1g-dev

RUN docker-php-ext-install \
    zip \
    pdo \
    pdo_mysql \
    intl \
    mbstring

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Create 'me' group whith gid 1000 and 'me' user in this group with uid 1000
RUN groupadd -f -g 1000 me && useradd -u 1000 -g me me

# Allow apache to run with 'me' user
RUN chown me:me /var/lock/apache2
RUN chown me:me /var/run/apache2
# Define apache listen port on a port greater than 1024 to allow a non-root user (me) to start apache
RUN sed -i 's/Listen\ 80/Listen\ 1080/g' /etc/apache2/apache2.conf

# Create home for 'me' user for composer caches
RUN mkdir /home/me && chown me:me /home/me

EXPOSE 1080
