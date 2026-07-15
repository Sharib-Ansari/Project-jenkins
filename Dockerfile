FROM nginx:latest

COPY . /user/share/nginx/html

EXPOSE 80
