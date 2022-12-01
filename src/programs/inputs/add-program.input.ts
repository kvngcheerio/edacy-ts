/* eslint-disable max-classes-per-file */

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddProgramInput {
  @Field(() => String, { nullable: false })
  programTitle: string;

  @Field(() => String, { nullable: false })
  programLanguage: string;

  @Field(() => String, { nullable: false })
  programLevel: string;

  @Field(() => String, { nullable: false })
  programType: string;

  @Field(() => String, { nullable: false })
  programDescription: string;

  @Field(() => String, { nullable: false })
  learningObjectives: string;

  @Field(() => Number, { nullable: false })
  programDuration: number;

  @Field(() => Number, { nullable: false })
  programHoursPerWeek: number;

  @Field(() => String, { nullable: true })
  programPrerequisite?: string;

  @Field(() => String, { nullable: true })
  programCertificationType?: string;

  @Field(() => Date, { nullable: false })
  programStartDate: Date;

  @Field(() => String, { nullable: true })
  programCoverImage?: string;

  @Field(() => String, { nullable: true })
  programVideoThumbnail: string;
}


