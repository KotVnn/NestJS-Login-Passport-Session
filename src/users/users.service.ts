import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDto } from './dto/users.dto';
import { Role, RolesDocument } from '../roles/roles.schema';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Role.name) private readonly roleModel: Model<RolesDocument>,
  ) {}

  //Signup user method with username and password
  async insertUser(userDto: UsersDto) {
    userDto.username = userDto.username.toLowerCase();
    const obj = {};
    for (const userDtoKey in userDto) obj[userDtoKey] = userDto[userDtoKey];
    const newUser = new this.userModel(obj);
    await newUser.save();
    return newUser;
  }

  //log in user using the findOne method
  async getUser(userName: string) {
    const username = userName.toLowerCase();
    const user = await this.userModel
      .findOne({ username })
      .populate('roles', ['title', 'description'], this.roleModel)
      .exec();
    return user;
  }
}
