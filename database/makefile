APP_VERSION = 1.0.15
APP_NAME    = shopee-database

DB_USERNAME = root
DB_PASSWORD = root

# DOCKER TASKS
# Build the container
setup: 
	@docker build -t $(APP_NAME):v$(APP_VERSION) .

# Run the container
run: 
	@docker run -d -p 3306:3306 --net shopee-network --ip 172.18.0.2 --name $(APP_NAME) -e MYSQL_ROOT_PASSWORD=RootPassword -e MYSQL_DATABASE=Sales -e MYSQL_USER=MainUser -e MYSQL_PASSWORD=MainPassword $(APP_NAME):v$(APP_VERSION)

version: ## Output the current version
	@echo $(APP_VERSION)

