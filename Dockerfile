FROM node:12.7-alpine AS ui-build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12.7-alpine
WORKDIR /root/
COPY --from=ui-build /usr/src/app/dist ./dist
COPY package*.json ./
RUN npm install
COPY server/ ./server
COPY .env .
COPY server.js .

EXPOSE 4200

CMD ["node", "server.js"]