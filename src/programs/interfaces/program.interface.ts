export interface IProgram {
    programTitle: string;
    programLanguage: string;
    programLevel: string;
    programType: string;
    programDescription: string;
    learningObjectives: string;
    programDuration: number;
    programHoursPerWeek: number;
    programPrerequiste?: string;
    programCertificationType?: string;
    programStartDate: Date;
    programCoverImage?: string;
    programVideoThumbnail?: string;
  }