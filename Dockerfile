#################
# Build the app #
#################
FROM node:12-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist

################
# Run in NGINX #
################
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /dist /usr/share/nginx/html/
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.staging.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
