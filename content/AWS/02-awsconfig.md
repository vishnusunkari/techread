---
title: "AWS Config"
metaTitle: "AWS Config"
metaDescription: "What is AWS Config? A log of all configuration changes to aws resources."
---
### AWS Config (Configuration Logs for Monitoring, Compliance)
- A log of all configuration changes to AWS resources.  
- It is a paid service. When you enable AWS Config, it records a detailed view of the 
configuration of AWS resources(EC2, EBS, SGs, VPC etc). 
- Default settings is to monitor per region. You can change it to global resources as well.
Puts all the config snapshots in S3, you can customize the bucket names with prefix etc 
and it will put all in a folder called: prefix/AWSLogs/12341234123/Config/${region-name)bucketname  
- Config Recorder is not real time.   
- To stream config changes, use AWS Config along with SNS.  
- Integrates to CloudTrail with permission. 

### Features 
- Evaluate resource configs for desired settings
- Identify usage/change in config over time - current & historical.
- Configuration Timeline.
- Relationships of a resource with other resources.
- Add Config rules to report COMPLIANCE : 2 types
    1. AWS Managed rules
    2. User created rules 

Q. How to check if Running EC2 instances are using specific AMIs?  
A. Use an AWS Config Managed Rule and specify a list of approved AMI IDs. This rule will check 
whether RUNNING EC2 instances are using specified AMIs. Configure AWS Config to stream configuration 
changes and notifications to an Amazon SNS topic which will send a notification for non-compliant 
instances.   

Q. How to make sure a yet to be created EC2 instance should be using latest AMI?  
A. For checking latest AMI IDs before creation, use AWS Systems Manager's Parameter Store along 
with CloudFormation.