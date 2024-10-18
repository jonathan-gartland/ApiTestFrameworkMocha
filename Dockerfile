FROM node:22.9.0-alpine
WORKDIR /app
ADD . /app
RUN pnpm install
CMD pnpm test
