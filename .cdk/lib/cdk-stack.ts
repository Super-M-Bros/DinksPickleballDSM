import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfrontOrigins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket
    const bucket = new s3.Bucket(this, 'MyBucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS, // Allow public access but block ACLs
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
    });

    // Add a bucket policy to allow public read access
    bucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [`${bucket.bucketArn}/*`],
      principals: [new iam.AnyPrincipal()],
    }));

    // Output the S3 website URL
    new cdk.CfnOutput(this, 'BucketWebsiteURL', {
      value: bucket.bucketWebsiteUrl,
      description: 'The URL of the S3 bucket website',
    });

    // // Create a Route 53 hosted zone
    // const hostedZone = new route53.HostedZone(this, 'MyHostedZone', {
    //   zoneName: 'example.com', // Change to your domain name
    // });

    // // Create an SSL certificate
    // const certificate = new certificatemanager.Certificate(this, 'MyCertificate', {
    //   domainName: 'www.example.com', // Change to your domain name
    //   validation: certificatemanager.CertificateValidation.fromDns(hostedZone),
    // });

    // // Create a CloudFront distribution
    // const distribution = new cloudfront.Distribution(this, 'MyDistribution', {
    //   defaultBehavior: { origin: new cloudfrontOrigins.S3Origin(bucket) },
    //   domainNames: ['www.example.com'], // Change to your domain name
    //   certificate: certificate,
    // });

    // // Create a Route 53 A record to point to the CloudFront distribution
    // new route53.ARecord(this, 'MyAliasRecord', {
    //   zone: hostedZone,
    //   target: route53.RecordTarget.fromAlias(new route53Targets.CloudFrontTarget(distribution)),
    //   recordName: 'www', // Change to your subdomain if needed
    // });
  }
}
