FROM nginx:1.17.9-alpine
COPY nginx.conf /etc/nginx/
COPY /dist/product-adviser-front /usr/share/nginx/html/
