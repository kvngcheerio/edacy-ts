import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProgramInput {
  @Field(() => String, { nullable: true})
  programTitle: string;

  @Field(() => String, { nullable: true})
  programLanguage: string;

  @Field(() => String, { nullable: true})
  programLevel: string;

  @Field(() => String, { nullable: true})
  programType: string;

  @Field(() => String, { nullable: true})
  programDescription: string;

  @Field(() => String, { nullable: true})
  learningObjectives: string;

  @Field(() => Number, { nullable: true})
  programDuration: number;

  @Field(() => Number, { nullable: true})
  programHoursPerWeek: number;

  @Field(() => String, { nullable: true })
  programPrerequisite?: string;

  @Field(() => String, { nullable: true })
  programCertificationType?: string;

  @Field(() => Date, { nullable: true})
  programStartDate: Date;

  @Field(() => String, { nullable: true })
  programCoverImage?: string;

  @Field(() => String, { nullable: true })
  programVideoThumbnail: string;
}


