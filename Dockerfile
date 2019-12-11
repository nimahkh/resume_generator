# Stage 1 - the build process
FROM node:12.13.0-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.17.4-alpine
COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
