
## NestJS The Basics: Modules, Providers, and Controllers Explained

NestJS, inspired by Angular, offers a structured approach for building server-side applications. Here's a concise breakdown of key concepts:

**1. Modules:**

- Organize your application into self-contained units that encapsulate functionalities like controllers, services, and repositories.
- Modules promote code reusability, maintainability, and modularity.
- Example:

```typescript
@Module({
  controllers: [NinjasController],
  providers: [NinjasService],
})
export class NinjasModule {}
```

**2. Providers:**

- Represent services, repositories, or any objects that provide specific functionalities needed by your application.
- They can be singletons or created per request depending on their lifecycle.
- Providers are injected into controllers and other providers for dependency management.
- Example:

```typescript
@Injectable()
export class NinjasService {
  getNinjas(): Ninja[] {
    // ... logic to retrieve ninjas
  }
}
```

**3. Controllers:**

- Act as entry points for incoming HTTP requests.
- Handle requests by:
  - Extracting parameters from the URL (`@Param('id') id: string`)
  - Retrieving query string values (`@Query('sort') sort: string`)
  - Receiving request body data (`@Body() body: any`)
- Process data using services and providers, and return responses.
- Example:

```typescript
@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('sort') sort?: string): Ninja[] {
    return this.ninjasService.getNinjas(sort);
  }
}
```

**Analogy:**

Think of modules as containers holding related components. Providers are the tools inside the container, and controllers are the interfaces you use to interact with those tools.

By understanding these concepts, you can effectively structure and manage your NestJS applications, promoting clean code organization and maintainability.


### Notable mentions

**DTOs (Data Transfer Objects):**

- Define data structure and validation rules.
- Facilitate data transformation between layers.
- Enhance code organization, validation, and security.

**Example:**

```typescript
// ninjas.dto.ts
export class CreateNinjaDto {
  name: string; // Required
  weapon?: string; // Optional
}
```

**Benefits:**

- Improved code clarity
- Enforced data integrity
- Reduced coupling
- Enhanced security
