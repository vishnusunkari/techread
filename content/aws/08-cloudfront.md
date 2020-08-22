---
title: "CloudFront"
metaTitle: "AWS CloudFront"
metaDescription: "What is AWS CloudFront? CloudFront is a Content Delivery Network (CDN). Origin Access Identity, Edge Location, HTTPS on CloudFront, Lambda@Edge"
---
### CloudFront

- Viewer to Edge Location : Viewer Access
- Edge Location to Origin : Origin Access

### Origin Access Identity (OAI)
Enable it at Distribution level of Cloud Front which enables
S3 to access only via CloudFront.  In addition to this you need to have bucket policy
to restrict S3 bucket access from any other source than Origin Access Identity.   
**Steps**:  
1. Create a special CloudFront user called an origin access identity (OAI).  
2. Give the origin access identity permission to read the objects in your bucket.  
3. Remove anyone else's permission to use Amazon S3 URLs to read the objects.  

**Signed URLs and Cookies**: At behaviour level and not at distribution level. 
You can restrict individual behaviors by signed URLs and cookies.  These are used only via API.
Signed Cookies NOT supported with RTMP distributions.

### HTTPS on CloudFront 
HTTPS on CloudFront with alternate domain names, choose either:    
1. Use dedicated IP address in each edge location or  
2. Use Server Name Indication (SNI)


### Lambda@Edge 
- Lambda functions defined at Cloud Front per behavior.  
- Applicable per behavior    

### CloudFront Events
- Viewer Request
- Viewer Response
- Origin Request
- Origin Response.

### Geo-Restriction 
Built-in to CloudFront, is only based on the IP address of the client.  
For other restrictions you need to use a 3rd party service/application 
which uses compute service along with signed urls.

### Field-level encryption
In addition to the default end-to-end encryption from viewer to edge location to origin, 
you can add additional encryption from Edge location to Origin by having a public key on Edge location and 
private key at the origin.  This is called Field-level encryption.