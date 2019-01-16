FROM alpine
LABEL maintainer="Leon Feng"
RUN apk add --update nodejs nodejs-npm
COPY . /frontend
WORKDIR /frontend
RUN npm install
RUN npm run build
EXPOSE 5000
ENTRYPOINT ["./node_modules/.bin/serve", "-s", "build"]
