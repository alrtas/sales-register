APP_VERSION = 1.1.12
APP_NAME    = shopee-web

# DOCKER TASKS
# Build the container
setup: 
	@docker build -t $(APP_NAME):v$(APP_VERSION) .


# Run the container
run: 
	@docker run -dit --rm -p 3013:3000 --net shopee-network --ip 172.18.0.9 --name $(APP_NAME) $(APP_NAME):v$(APP_VERSION)


version: ## Output the current version
	@echo $(APP_VERSION)
