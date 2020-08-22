---
title: "AWS Organizations"
metaTitle: "Summary of AWS Organizations"
metaDescription: "What is AWS Organizations. AWS Organizations is an account management service on AWS 
that allows you to consolidate multiple AWS accounts into a single organization."
---
### AWS Organizations (Multi-Account Management)

What is AWS Organizations. When you have multiple AWS accounts, it is a challenge to manage these accounts individually. 
Each account has its own billing, access management, security, and compliance requirements. AWS Organizations 
is an account management service that allows you to consolidate multiple AWS accounts into a single organization. 
Enable All Features before you create SCPs (Service Control Policy).

- One Master Account, Mulitple Member Accounts.
Root -> OU -> Account -> OU -> Account.  
SCPs are applied downward hierarchically.
- SCPs applied to Master Account do nothing.
- SCPs do not grant permissions instead restrict existing permissions an account has.  

### AWS Organization Modes 
- Consolidated Billing (default), 
- All Features  

### Features

1. Centralized Management of all your AWS Accounts
2. Consolidated billing for all member accounts
3. Hierarchical grouping of your accounts (OUs, SCP (Service Control Policy) )
4. Control over AWS Services and API actions
5. Integration and support for AWS IAM
6. Eventually, consistent data replication

### New Account Creation  
- Invite account (Send an email to Root account which should be accepted)
- Create Account directly.

SCPs (Service Control Policy) DO NOT affect any service-linked role. Service-linked roles enable other AWS services to integrate with
 AWS Organizations and can't be restricted by SCPs.

### ResourceAccessManager (RAM)
Where AWS resources can be shared across accounts within Organization as well as outside
Organization.  
- Owner and Participant.  
- *All Features* mode need to be enabled.
- Participant does not have to accept as long as the checkbox in RAM services is checked while sharing to the participant.
- Enables you to share specified AWS resources that you own with other AWS accounts.
- To enable trusted access with AWS Organizations:
From the AWS RAM CLI, use the enable-sharing-with-aws-organizations command.
IAM service-linked role that can be created in accounts when trusted access is enabled: AWSResourceAccessManagerServiceRolePolicy.
- You can use trusted access to enable an AWS service that you specify, called the trusted service, that can create an IAM role
called service-linked role in accounts of your organization to perform tasks in your organization and its accounts
on your behalf.
- Only the Root User has access to Billing dashboard.  No admin users donot have access to billing. You can add billing admin users
to have users access billing info.

Q. How to provide a way for admins in master account to have access to stop, delete and/or terminate resources in both
development and test environment accounts?  
A. First, create IAM users in the master account. Then in the Dev and Test accounts, generate cross-account roles that have
full admin permissions while granting access for the master account is correct because the cross-account role is created
in Dev and Test accounts, and the users are created in the Master account that are given that role.
