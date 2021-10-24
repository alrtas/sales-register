APP_VERSION = 1.1.6
APP_NAME    = shopee-cli

#################### DOCKER TASKS ####################
## Build the container
setup: 
	@docker build -t $(APP_NAME):v$(APP_VERSION) .


## Run the container
run: 
	@docker run -dit --rm -p 3012:3012 --net shopee-network --ip 172.18.0.10 --name $(APP_NAME) $(APP_NAME):v$(APP_VERSION)

## Output the current version
version: 
	@echo $(APP_VERSION)
