import { Body, Controller, Get, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesDto } from './dto/roles.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly roleServ: RolesService) {}

  @Get()
  getAll() {
    return this.roleServ
      .findMany()
      .then()
      .catch((err) => {
        console.log('getAll.Role', err.message);
        return err.message;
      });
  }

  @Post('create')
  createRole(@Body() roleDto: RolesDto) {
    return this.roleServ
      .createRole(roleDto)
      .then()
      .catch((err) => {
        console.log('create.Role', err.message, roleDto.name);
        return err.message;
      });
  }
}
