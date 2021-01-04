# Stage 1
FROM node:10-alpine as builder
# Aliases are allowed, as seen above.

# Make another directory to build in
RUN mkdir -p /app 
WORKDIR /app

# Copy package.json into /app and then install to get dependencies.
COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine
# --from=builder is copying the contents from the previous stage
COPY --from=builder /app/dist/angular-hero /usr/share/nginx/html
