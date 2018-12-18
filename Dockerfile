FROM nginx:latest
MAINTAINER Dennis273 <dennisc695@gmail.com>
COPY build/ /usr/www/
COPY nginx.conf /etc/nginx/nginx.conf
