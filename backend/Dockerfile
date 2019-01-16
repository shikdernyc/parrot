FROM alpine
LABEL maintainer="Leon Feng"
RUN apk add --update nodejs nodejs-npm
COPY . /backend
WORKDIR /backend
RUN npm install --only=prod
EXPOSE 8000
ENTRYPOINT ["npm", "run", "start_prod"]
