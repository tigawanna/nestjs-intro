## OpenAPI/Swagger documentation

**Swagger and OpenAPI in NestJS:**

**1. Installation:**

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

**2. Global Configuration (Optional):**

- Create a `swagger.config.js` file at the root of your project to configure default Swagger options:

```javascript
// swagger.config.js
module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My NestJS API',
      version: '1.0.0',
      description: 'My awesome NestJS application API',
    },
  },
  apis: ['./controllers/*.controller.ts'], // Update with your controller paths
};
```

**3. Swagger Module Setup (Optional):**

- Create a `swagger.module.ts` file to manage Swagger configuration and initialization:

```typescript
// swagger.module.ts
import { Module } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import { config } from './swagger.config';

@Module({
  providers: [],
})
export class SwaggerModule {
  static setup(app) {
    const options = new DocumentBuilder()
      .set... // Configure options based on your swagger.config.js
      .build();
    const document = SwaggerModule.createDocument(app, options);
    fs.writeFileSync(path.join(__dirname, '../swagger-spec.json'), JSON.stringify(document, null, 2));
    SwaggerModule.setup('/api', app, document);
  }
}
```

**4. Integrate into Your Application:**

- Import `SwaggerModule` and `ApiGlobalPrefix` in your `main.ts` file:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, ApiGlobalPrefix } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Apply global API prefix (optional):
  app.useGlobalPrefix('/api');

  // Optional: Configure Swagger using module (if applicable)
  // SwaggerModule.setup(app, SwaggerModule.createDocument(app, config));

  await app.listen(3000);
}

bootstrap();
```

**5. Accessing the Swagger UI:**

- Start your application and navigate to `http://localhost:3000/api` (or `/api` if using global prefix) to access the Swagger UI.

**Validation with `class-validator` and `class-transformer`:**

**1. Installation:**

```bash
npm install --save class-validator class-transformer
```

**2. Create DTOs (Data Transfer Objects):**

- Define DTOs using TypeScript classes to represent the expected structure and validation rules for request and response data. Use class-validator decorators for validation:

```typescript
// ninjas.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNinjaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  weapon?: string;
}
```

**3. Apply Validation to Controllers:**

- Use the `@UsePipes()` decorator to apply a custom validation pipe to controllers or specific methods:

```typescript
// ninjas.controller.ts
import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { CreateNinjaDto } from './ninjas.dto';
import { NinjasService } from './ninjas.service';
import { ValidationPipe } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    // Process validated data
  }
}
```

**4. Optional: Custom Validation Pipe:**

- Extend the `ValidationPipe` class to customize options or error handling:

```typescript
import { ValidationPipe } from '@nestjs/common';

export class CustomValidationPipe extends ValidationPipe {
  // Add custom logic here (if needed)
}
```

**Key Improvements:**

- Clear and concise explanation of both Swagger and validation concepts.
