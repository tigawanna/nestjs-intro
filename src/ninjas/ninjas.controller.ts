import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
const ninjas = [
  'ninja  1',
  'ninja  2',
  'ninja  3',
  'ninja  4',
  'ninja  5',
  'ninja  6',
  'ninja  7',
  'ninja  8',
  'ninja  9',
  'ninja  10',
];
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
  // GET : /ninjas/:id ->nijnas
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return ninjas[parseInt(id) - 1];
  }
  //  POST : /ninjas ->nijna
  @Post()
  createNinja(@Body() createNinjaeDto: CreateNinjaDto) {
    return {
      createNinjaeDto,
    };
  }
  //  PUT : /ninjas/:id ->nijna
  //  DELETE : /ninjas/:id ->nijna
}
