APP_VERSION = 1.1.2
APP_NAME    = shopee-cli

#################### DOCKER TASKS ####################
## Build the container
setup: 
	@docker build -t $(APP_NAME):v$(APP_VERSION) .


## Run the container
run: 
	@docker run -dit --rm -p 3012:3012 --name $(APP_NAME) $(APP_NAME):v$(APP_VERSION)

## Output the current version
version: 
	@echo $(APP_VERSION)
