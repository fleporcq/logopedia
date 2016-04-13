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
RUN setcap 'cap_net_bind_service=+ep' /usr/sbin/apache2
RUN chown me:me /var/lock/apache2
RUN chown me:me /var/run/apache2

# Create home for 'me' user for composer caches
RUN mkdir /home/me && chown me:me /home/me
