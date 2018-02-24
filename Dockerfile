FROM registry.cn-hangzhou.aliyuncs.com/nocode/nocode_node:latest

COPY ./ /workspace

WORKDIR /workspace
RUN npm i
RUN chmod +x ./docker-entrypoint.sh
EXPOSE 10080

ENTRYPOINT ["./docker-entrypoint.sh"]
