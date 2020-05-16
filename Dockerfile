FROM node:10-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:10-alpine AS prod
WORKDIR /app
EXPOSE 8080
COPY --from=builder ./app/build ./build
COPY package* ./
RUN npm install --production
