# AI-plugins

## Setup

```
npm run setup
```

## develop plugins

1. first prepare .env

```
touch ./plugins/PLUGIN_NAME_DIRECTORY/.env
```

```.env
KINTONE_BASE_URL=
KINTONE_USERNAME=
KINTONE_PASSWORD=
```

2. develop and upload

```
npm run develop
```

with watch mode
```
npm run develop:watch
```

## Build production plugin
build
```
npm run build
```
build and upload
```
npm run production
```
