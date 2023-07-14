FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm run build

COPY . .

EXPOSE 5173

CMD ["npm", "start"]