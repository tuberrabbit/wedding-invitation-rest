FROM node:latest

COPY ./ /workspace

WORKDIR /workspace
RUN npm i
RUN chmod +x ./docker-entrypoint.sh
EXPOSE 8090

ENTRYPOINT ["./docker-entrypoint.sh"]
