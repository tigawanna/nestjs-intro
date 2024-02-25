## Key Concepts of NestJS with Code Examples

NestJS provides a structured approach for building server-side applications using TypeScript. Here's a breakdown of its key concepts with code examples:

**1. Modular Architecture:**

- Applications are organized into modules, each with specific functionalities.

```typescript
// ninjas.module.ts
import { Module } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { NinjasController } from './ninjas.controller';

@Module({
  providers: [NinjasService],
  controllers: [NinjasController],
})
export class NinjasModule {}
```

**2. Dependency Injection:**

- Objects are provided by the framework instead of manually created.

```typescript
// ninjas.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon?: string) {
    return this.ninjasService.getNinjas(weapon);
  }
}
```

**3. Controllers:**

- Handle incoming requests, process them using services, and return responses.

```typescript
// ninjas.controller.ts (mentioned above)
```

**4. Providers:**

- Encapsulate business logic and functionalities.

```typescript
// ninjas.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Ryu', weapon: 'Katana' },
    { id: 2, name: 'Ken', weapon: 'Shoryuken' },
  ];

  getNinjas(weapon?: string) {
    return this.ninjas.filter((ninja) => !weapon || ninja.weapon === weapon);
  }
}
```

**5. Decorators:**

- Annotate classes and methods with metadata defining their behavior.

```typescript
// ninjas.controller.ts (mentioned above)
// @Controller, @Get, and @Query are decorators
```


