# Stage 1 - the build process
FROM node:10-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
RUN npm i
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.17.4-alpine
COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
