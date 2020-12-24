import * as AWS from 'aws-sdk';
import { AWSconfig } from './AWS/awsConfig';
import { v4 as uuidv4 } from 'uuid';

const BUCKET_NAME = AWSconfig.BUCKET_NAME;

const s3 = new AWS.S3({
    region: AWSconfig.REGION,
    secretAccessKey: AWSconfig.SECRET_ACCESS_KEY,
    accessKeyId: AWSconfig.ACCESS_KEY
})

const uploadToS3 = async (file) => {
    //let name = uuidv4() + "-" + file.type.replace('/', '-');
    await s3.putObject({
        Key: file.name,
        Bucket: BUCKET_NAME,
        ContentType: file.type,
        Body: file,
        ACL: 'public-read-write'
    }).promise();
    return `https://${BUCKET_NAME}.s3-eu-west-1.amazonaws.com/${file.name}`;
}

export const UploadFile = async (fileObj) => {
    let links = [];
    for (var i = 0; i < fileObj.reportFiles.length; i++) {
        try {
            links.push(await uploadToS3(fileObj.reportFiles[i]))
        }
        catch (err) {
            alert('Error has ocurred, please try again');
            console.log(err);
        }
    }

    return links;
};