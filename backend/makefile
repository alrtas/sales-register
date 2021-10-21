APP_VERSION = 1.0.5
APP_NAME    = shopee-backend

# DOCKER TASKS
# Build the container
setup: 
	@docker build -t $(APP_NAME):v$(APP_VERSION) .


# Run the container
run: 
	@docker run -dit --rm -p 3000:3000 --name $(APP_NAME) $(APP_NAME):v$(APP_VERSION)


version: ## Output the current version
	@echo $(APP_VERSION)
