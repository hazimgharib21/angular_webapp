docker build -t webapp-image .
docker container stop webapp-container
docker container rm webapp-container
docker run --name webapp-container -d -p 80:4200 webapp-image