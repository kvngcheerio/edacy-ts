import * as dotenv from 'dotenv';
import * as joi from 'joi';


process.env.ENV_PATH
  ? dotenv.config({ path: process.env.ENV_PATH })
  : dotenv.config();

const envVarsSchema = joi.object({
    // server config
    PORT: joi.number().default('3000'),
    NODE_ENV: joi.string().allow('development', 'production').required(),
    DEVELOPMENT_START_COMMAND: joi.string().default('yarn start:dev'),
    LOG_LEVEL: joi
      .string()
      .allow('error', 'warning', 'info', 'debug', 'silly')
      .default('silly'),
     DB_URL:  joi.string().required()
  })
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  logLevel: envVars.LOG_LEVEL,
  isDevelopment:
    envVars.NODE_ENV === 'test' || envVars.NODE_ENV === 'development',
  isProduction: envVars.NODE_ENV === 'production',
  secret: envVars.SECRET,
  superAdmin: envVars.SUPER_ADMIN,
  db_url: envVars.DB_URL,
  aws: {
    access_key_id: envVars.AWS_ACCESS_KEY_ID,
    secret_access_key: envVars.AWS_SECRET_ACCESS_KEY,
    region: envVars.AWS_REGION,
  },

};