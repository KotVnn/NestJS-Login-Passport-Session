import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './roles.schema';
import { RolesDto } from './dto/roles.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel('role') private readonly roleModel: Model<Role>) {}

  async createRole(roleDto: RolesDto): Promise<Role> {
    const createRole = new this.roleModel(roleDto);
    return createRole.save();
  }

  async findMany(query?: object): Promise<Role[]> {
    return this.roleModel.find(query).exec();
  }
}
