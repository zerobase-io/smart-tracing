FROM node:10-alpine AS ts-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:10-alpine AS ts-prod
WORKDIR /app
EXPOSE 8080
COPY --from=ts-builder ./app/public ./public
COPY package* ./
RUN npm install --production

