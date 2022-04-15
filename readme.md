# Base-jest

[Origen - Basarak gitbook](https://basarat.gitbook.io/typescript/intro-1/jest)

## Creacion
  - `npm init`
  - `npm i jest @types/jest ts-jest typescript -D`:
    - jest framework (jest)
    - Install the types for jest (@types/jest)
    - Install the TypeScript preprocessor for jest (ts-jest) which allows jest to transpile TypeScript on the fly and have source-map support built in.
    - Install the TypeScript compiler ('typescript') which is prerequisite for 'ts-jest'.
    - Save all of these to your dev dependencies (testing is almost always a npm dev-dependency)
  - `tsc --init`: Crea archivo tsconfig.json
  - `npx ts-jest config:init`: Crear en root jest.config.js
  - Ejecutar test: `npx jest [--watchAll]`: --watch solo soportado con git/hq
  - Añadir "test": "jest" a package.json script
  - `npm i -D jest-runner-groups`
    - Añade la ejecución por grupos, junto con la configuración en jest.config.json

### Aislamiento de test
  - Tests en carpeta spec, con archivo interior jest.config.json
  - Scripts de ejecucion de test con flag --config a jest.config.json

## Mensajes de test
  - Problema al instalar paquetes jest-expect-message y @alex_neo/jest-expect-message:
    - No se reconoce el expect con dos argumentos