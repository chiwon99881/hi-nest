## Learning Nest

- #01 Init

  ```bash
  npm install -g @nestjs/cli

  nest new (create nest project)
  ```

- #02 Create New Controller, Service

  ```bash
  nest generate controller

  nest generate service
  ```

- #03 DTO with Validation

  ```bash
  npm i class-validator

  npm i class-transformer
  ```

- #04 DTO with Validation 2

  ```bash
  npm i @nestjs/mapped-types

  PartialType()
  ```

- #05 App Module

- #06 Unit Test

  ```bash
  npm run test:watch
  ```

- #07 Unit Test Done

- #08 E2E Test (End to End)

  ```bash
  npm run test:e2e
  ```

- #09 E2E Test 2

  > To know: 테스트 파일의 App과 실제 서버의 App은 다른 것임을 반드시 알아야 한다.

  > 그래서 테스트 App도 서버와 똑같은 App이 되려면 main.ts에서 처리해준 Pipe를 똑같이 해줘야 한다.
