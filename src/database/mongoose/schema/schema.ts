import mongoose from 'mongoose';

const { Schema } = mongoose;

class MakeSchema {
  schemaRules: Record<string, any>;
  collectionName: any;
  CreatedSchema: any;
  constructor(collectionName: string, schemaObj: Record<string, any>) {
    this.schemaRules = schemaObj;
    this.collectionName = collectionName;
    this.CreatedSchema = new Schema(this.schemaRules);
  }

  getModel(): any {
    return mongoose.model(
      this.collectionName,
      this.CreatedSchema,
      this.collectionName,
    );
  }

  getSchema(): any {
    return this.CreatedSchema;
  }
}

export { MakeSchema, Schema };
