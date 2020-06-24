FROM node:12.7-alpine AS client-build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=client-build /usr/src/app/dist/webapp /usr/share/nginx/html