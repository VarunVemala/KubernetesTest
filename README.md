# KubernetesTest
This Repo is to test K8s.

1. Create Git Repo
2. Clone to Local
3. Build a NodeJS Express application
4. Push to Git
5. Dockerize the application
6. Push to Git
7. Run a K8s cluster with the Docker Image

Node:
1. Express application running on port 1236.
2. Paths: /, /things, /things/hello, /things/hello/<string>

Docker:
1. docker build -t varunvemala/nodetestproj:v1.0.0  <GIT_HTTPS_URL>
2. docker push varunvemala/nodetestproj:v1.0.0
