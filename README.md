# Build with docker

docker build -t webapp-image .

# Run with docker

docker run --name webapp-container -d -p 80:4200 webapp-image

