network:
	@docker network prune
	@docker network create --subnet=172.18.0.0/16 shopee-network

inspect:
	@docker network inspect shopee-network