# build stage
FROM node:10.15.0 as build-stage

WORKDIR /client
COPY package.json yarn.lock ./
# RUN npm install -g @vue/cli
RUN yarn install
COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /client/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
