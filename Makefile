packages:
	yarn install

dev:
	yarn dev

test:
	yarn test

up:
	docker-compose up -d

down:
	docker-compose down

ammend:
	git add --all && git commit --amend --no-edit && git push origin main -f

.PHONY: packages dev test up down ammend