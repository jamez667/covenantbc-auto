server:
	yarn run http-server -d false ./mochawesome-report

docker_build:
	docker build -t test-auto .

.PHONY: docker_build test build server
