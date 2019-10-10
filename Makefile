build: test

server:
	yarn run http-server -d false ./mochawesome-report

test:
	yarn run mocha test/smoke/tests \
		--reporter mochawesome \
		--reporter-options reportFilename=index

docker_build:
	docker build -t test-auto .

.PHONY: docker_build test build
