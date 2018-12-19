# README

[![Build Status](https://travis-ci.org/ServiceComputingTeam/Blog-FE.svg?branch=master)](https://travis-ci.org/ServiceComputingTeam/Blog-FE)

Front-end for project Blog.

## 使用

1. 从Release下载 docker 镜像

   [LATESET RELEASE](https://github.com/ServiceComputingTeam/Blog-FE/releases/latest)

   [DOCKER IMAGE](https://github.com/ServiceComputingTeam/Blog-FE/releases/download/v0.2.3.2/app.tar)

2. 加载镜像

   ```bash
   docker import ./app.tar
   ```

3. 创建容器

   ```bash
   docker run -p <PORT>:80 --name=<APP NAME> -d app
   ```

   ​
