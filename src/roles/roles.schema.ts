import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RolesDocument = Role & Document;

@Schema()
export class Role {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  title?: string;
  @Prop({ required: true })
  level: number;
  @Prop()
  description?: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
