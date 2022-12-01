import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { config } from '../config';

const { aws } = config;

@Injectable()
export class FileUploadService {
  public constructor() {}

  async upload(file): Promise<void> {
    const { originalname } = file;
    const bucketS3 = 'topship';
    return await this.uploadS3(file.buffer, bucketS3, originalname);
  }

  async uploadS3(file, bucket: string, name: string): Promise<any> {
    const s3 = this.getS3();
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
    };
    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          reject(err.message);
        }
        resolve(data);
      });
    });
  }

  getS3(): S3 {
    return new S3({
      accessKeyId: aws.access_key_id,
      secretAccessKey: aws.secret_access_key,
      region: aws.region,
    });
  }
}
