install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
link:
	sudo npm link
lint:
	npx eslint .
