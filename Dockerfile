FROM node:20.14-bullseye-slim as builder

WORKDIR /app

ARG VITE_SERVER_URL
ARG VITE_AUTH_URL

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
