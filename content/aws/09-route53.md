---
title: "Route53"
metaTitle: "AWS Route53"
metaDescription: "What is Route53? Route53 is AWS DNS product. 
It provides both public and private DNS services. It does both register domains as well as 
host domains.  Hosted Zone, Record Set, Inbound Outbound endpoints"
---
### Route53 (DNS Management)
Route53 is AWS DNS product. It provides both public and private DNS services. It does both register domains as well as 
host domains.  
 
**Hosted Zones** :   
Created by Route53 Registrar (eg: techgry.com)  
Provides 4 nameserver values  

**Register domains** :   
To integrage the hosted zone with registered domains.  
Edit the registered domain name (techgry.com)    
and  update the registered name servers with the hosted zone nameservers.  

The above process is done automatically if you register a domain inside Route53.

Hosted Zone : Public or Private.  
Inside a Hosted Zone is where you create a Record Set. 
Its the Record Set which defines how DNS interacts with the outside world.   
 
**A** : Domain to IPV4 IP address 
    (you can specify A record with Alias enabled meaning instead of an IP address 
      you can point to logical aws resource (name of s3 bucket))
      You cannot use CNAME for an APEX of the domain (techgry.com) ie why 
      you can use A type with Alias pointing to a logical AWS resource.  
**AAAA** : Domain to IPV6 IP address    
**CNAME** : Hostname(should NOT be apex domain) to another hostname    
**MX**:  Route email   

**Inbound endpoints** :
You can reference your private DNS hosted zones to elastic IPs which can then be used by other.

**Outbound endpoints** :
Allow creation of elastic IPs inside VPC and you can use those to reference private DNS hosted zones.

To route domain traffic to an ELB load balancer, use Route 53 to create an alias record that points 
to your load balancer. An alias record is a Route 53 extension to DNS. It's similar to a CNAME record, but 
you can create an alias record both for the root domain, such as example.com, and for subdomains, 
such as www.example.com. (You can create CNAME records only for subdomains). 

For EC2 instances, always use a Type A Record WITH NO Alias. 
For ELB, Cloudfront and S3, always use a Type A Record WITH an Alias.  
For RDS, always use the CNAME Record with NO Alias. 

DNS active-active failover allows access to your unhealthy instances to be redirected to active instances. 
Together with latency-based routing, customers accessing your web servers will be balanced throughout 
available healthy instances based on latency.

DNS active-passive failover using failover based routing policy, you still need to have a secondary 
group of healthy resources on standby. When your primary group of instances starts failing, only then 
will the second group be included.
