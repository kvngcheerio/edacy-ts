import { MakeSchema } from '../schema/schema';

const rules = {
  programTitle: {
    type: String,
    minlength: 5,
    required: [true, 'program title not supplied'],
  },
  programLanguage: {
    type: String,
    required: [true, 'program Language not supplied'],
  },
  programLevel: {
    type: String,
    required: [true, 'program level not supplied'],
  },
  programType: {
    type: String,
    required: [true, 'program type not supplied'],
  },
  programDescription: {
    type: String,
    required: [true, 'program description not supplied'],
  },
  learningObjectives: {
    type: String,
    required: [true, 'learning objectives not supplied'],
  },
  programDuration: {
    type: Number,
    required: [true, 'program duration not supplied'],
  },
  programHoursPerWeek: {
    type: Number,
    required: [true, 'hours per week not supplied'],
  },
  programPrerequisite: {
    type: String,
  },
  programCertificationType: {
    type: String,
  },
  programStartDate: {
    type: Date,
  },
  programCoverImage: {
    type: String,
  },
  programVideoThumbnail: {
    type: String,
  },
};

const controller = new MakeSchema('programs', rules);
const ProgramModel = controller.getModel();

export { ProgramModel };
