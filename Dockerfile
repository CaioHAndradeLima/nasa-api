FROM node:18

ARG MODE
WORKDIR /usr/src/api

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start:prod"]