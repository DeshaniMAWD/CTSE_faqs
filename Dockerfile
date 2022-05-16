FROM node:latest



WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4545

ENTRYPOINT ["node", "faqs.js"]

