import { Schema as MongooseSchema } from 'mongoose';

export class UsersDto {
  username: string;
  password: string;
  readonly nickName?: string;
  readonly email?: string;
  readonly session?: string;
  readonly token?: string;
  readonly telegramId?: string;
  readonly telegramChatId?: string;
  readonly roles: MongooseSchema.Types.ObjectId;
}
