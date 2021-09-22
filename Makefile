PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash -o pipefail

define cmddesc
	@tput setaf 6
	@echo $1
	@tput sgr0
endef

# Development commands
clean-build:
	make remove-dependencies
	make dependencies

preview-build:
	make clean-build
	make build
	yarn pack

# Production commands
build:
	$(call cmddesc, "Building production package")
	yarn build

# Common commands
remove-dependencies:
	$(call cmddesc, "Removing existing dependencies")
	rm -rf ./node_modules

dependencies:
	$(call cmddesc, "Installing dependencies")
	yarn install

tests:
	$(call cmddesc, "Start tests")
	yarn test

lint:
	$(call cmddesc, "Check linters")
	yarn lint
