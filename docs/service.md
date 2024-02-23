# Services

```ts
// example ninjas service
import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
    private ninjas = [
        {id:0,name:"bruno",weapon:"katana"},
        {id:1,name:"mario",weapon:"nunchuks"},
        {id:2,name:"sophie",weapon:"sabre"},
        {id:3,name:"miguel",weapon:"spear"},
        {id:4,name:"denni",weapon:"stars"}

    ]

    getNinjas(weapon:"katana" | "nunchuks" | "sabre" | "spear" | "stars"){ 
        return this.ninjas.filter((ninja)=>ninja.weapon === weapon);
    }
}
```

```ts
//  direct usage of the class
@Controller('ninjas')
export class NinjasController {
  //  GET : /ninjas ->[nijnas]
  @Get()
  getNinjas(
    @Query('weapon')
    weapon: 'katana' | 'nunchuks' | 'sabre' | 'spear' | 'stars' | undefined,
  ) {
    const ninjas = new NinjasService();
    return ninjas.getNinjas(weapon);
  }
  }
```

```ts
//  injecting into the controller
@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {}
  //  GET : /ninjas ->[nijnas]
  @Get()
  getNinjas(
    @Query('weapon')
    weapon: 'katana' | 'nunchuks' | 'sabre' | 'spear' | 'stars' | undefined,
  ) {
    return this.ninjasService.getNinjas(weapon);
  }
  }
```
