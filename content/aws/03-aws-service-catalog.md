---
title: "AWS Service Catalog"
metaTitle: "AWS Service Catalog"
metaDescription: "What is AWS Service Catalog? Users can be allowed to self-service deploy 
AWS products without the usual required IAM permissions"
---
### AWS Service Catalog (Self-Service)

Users can be allowed to self-service deploy aws products without the usual IAM permissions required 
todo so directly with AWS services.  

Normally you need to give lots of permissions to end users to deploy AWS resources using 
CloudFormation templates eg: (access to EC2, RDS, VPC). Also technical skills required to deploy these resources. 
Service Catalog allows you as a service catalog admin to get all these things done in the 
back-ground. Just use software and portal to self-service deploy these products. 
User would have only read-only access to the AWS account but may have service catalog role 
with admin access permission to deploy.  

### Features
- Allows administrators to define **PRODUCTS** and **PORTFOLIOS** (groups of products and configuration). 
- Its a per region service.
- In addition to service catalog admin access, needs service catalog 
provision product permissions added to the customer.  
- Within portfolio, you can add **TEMPLATE CONSTRAINTS** so end-user can deploy 
only specific type of instances.  

### Types of constraints: LNTS  

1. Launch
2. Notification
3. Template
4. StackSet
