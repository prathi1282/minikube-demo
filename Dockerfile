FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install http
EXPOSE 8080
CMD ["node", "app.js"]

