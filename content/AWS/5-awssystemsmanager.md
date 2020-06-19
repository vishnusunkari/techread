---
title: "AWS Systems Manager"
metaTitle: "AWS Systems Manager"
metaDescription: "What is AWS Systems Manager? AWS Systems Manager is a collection of capabilities 
for configuring and managing your Amazon EC2 instances, on-premises servers and virtual machines, 
and other AWS resources at scale."
---
### AWS Systems Manager (SSM Agent)

AWS Systems Manager manages resources inside an AWS account as well as 
on-premises or virtual machines (via activations) by installing ssm agent
and giving IAM permissions.  

- All the modern AMIs are built-in with SSM agent.
- AWS Systems Manager is a collection of capabilities for configuring and managing your 
Amazon EC2 instances, on-premises servers and virtual machines, and other AWS resources at scale.
- Systems Manager runs as a public zone end-point. So it needs a vpc end-point or an attached 
internet gateway to manage systems.
- Usually instance role (attached with IAM permissions policy - Managed permission policy called 
AmazonEc2RoleforSSM) is attached to the Ec2 instance which enables SSM agent on this 
ec2 instance to talk to SSM end-point. Meaning this ec2 instance can fully communicate with SSM.

###  Managed Instances  
**Inventory**:  SSM gathers inventory data from all SSM managed instances and show it on dashboard.
**Documents**: define instructions of what Systems Manager needs to do inside systems. (yaml or json).
**Automation**: set of actions as a workflow with a role to automate certain processes similar to Service Catalog or stack roles in cloudformation 
### Run Command
Allows to execute a document on one or more managed instances.
### Patch Manager 
- Current state to up to date instances in terms of patches.  
- Uses underlying run command to deploy these patches
### Parameter Store
- Provides secure storage for sensitive config data such as secrets etc.  
eg: application.properties across fleet of ec2  
      /prod/DBApp1/db-string  
      /prod/DBApp1/db-password  
- Data is stored hierarchically. 
- Data is versioned and access can be controlled and audited.
- Integrates with EC2, ECS, Lambda, CodeBuild/Deploy etc.

Q. How to make sure a yet to be created EC2 instance should be using latest AMI?  
A. Use CloudFormation with Systems Manager Parameter Store to retrieve the latest AMI IDs 
for your template.  Whenever you decide to update EC2 instances, call the update-stack API
in CloudFormation template.

### Secrets Manager  
If you want a single store for configuration and secrets, 
you can use Parameter Store. If you want a dedicated secrets store with 
lifecycle management and key rotation, use Secrets Manager.
