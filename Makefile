GREEN := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
RESET := $(shell tput -Txterm sgr0)

SHELL:=/bin/bash

#define default
all: help

build-apk-dev:
	@npx react-native bundle --platform android --dev true --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
	@bash -c "cd android && ./gradlew assembleDebug"
	@echo "Exports can be found at android/app/build/outputs/apk/"

build-apk-prod:
	@npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
	@bash -c "cd android && ./gradlew assembleRelease"
	@echo "Exports can be found at android/app/build/outputs/apk/"

help:
	@echo '${YELLOW}Commands:${RESET}'
	@echo ''
	@echo '${YELLOW}Build App:${RESET}'
	@echo '${GREEN}build-apk-dev${RESET}				Build a development APK of the app'
	@echo '${GREEN}build-apk-prod${RESET}				Build a production APK of the app'
