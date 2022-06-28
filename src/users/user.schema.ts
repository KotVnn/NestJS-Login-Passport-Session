import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Role } from '../roles/roles.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id?: MongooseSchema.Types.ObjectId;
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  nickName?: string;
  @Prop()
  email?: string;
  @Prop()
  session?: string;
  @Prop()
  token?: string;
  @Prop()
  telegramId?: string;
  @Prop()
  telegramChatId?: string;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Role' })
  roles: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
