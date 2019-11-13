#
# Backend vendor
#
FROM composer:1.9 as backend-vendor

# Copy required files
COPY src/composer.json composer.json
COPY src/composer.lock composer.lock

# Check packages
RUN composer validate \
    --no-check-all \
    --no-check-publish

# Install packages
RUN composer install \
    --ignore-platform-reqs \
    --prefer-dist \
    --no-dev \
    --no-scripts \
    --no-progress \
    --no-suggest \
    --no-ansi \
    --no-interaction \
    --no-plugins

#
# Application
#
FROM ornikar/php:7.3-fpm-alpine3.10

# Labels
LABEL Maintainer="Julien BREUX <juliano@ornikar.com>"

# Copy project files
COPY ./src /var/www/html
COPY --from=backend-vendor /app/vendor/ /var/www/html/vendor/

# Apply permissions
RUN chown -R www-data:www-data /var/www/html
