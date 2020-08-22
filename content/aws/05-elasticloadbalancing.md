---
title: "Elastic Load Balancing"
metaTitle: "AWS Elastic Load Balancing"
metaDescription: "What is Elastic Load Balancing? Elastic Load Balancing means automatically distributing 
incoming application traffic across multiple server instances."
---
### Elastic Load Balancing  
Elastic Load Balancing means automatically distributing incoming application traffic across
multiple server instances. Amazon Elastic Load balancers support cross-zone load balancing meaning balance traffic to instances located across multiple
AZs (Availability Zone). This allows for High Availability and Fault tolerant architecture.

Supports ELB cookie stickiness. ELB creates a cookie, named *AWSELB*, that is used to map the 
session to the instance. Supports application generated cookie stickiness.

**ELB stickiness (session persistence)**: A process in which a load balancer creates an affinity 
between a client and a specific network server for the duration of a session.

ELB has a DNS name. For Route53 integration with ELB :   
1. Create a Record Set CNAME in Route53 with website name and value is the DNS name of the ELB or  
2. Create an alias record that points to your ELB.

**SSL offloading**:  You can have http/https at ELB and http/https for each individual node.
https at ELB and http for each individual node is SSL offloading that means you secured
connection until ELB and non-secured connection from ELB to each node which reduces admin overhead.
If no SSL offloading then you need to have certificates on each node.

You should always communicate with A record (DNS name) of a Load Balancer or use CNAME in Route53 
to point to this A record (DNS name).  You should NOT use direct IP.

### Application Load Balancers (ALB)
Traditional Load Balancers are not conducive to running Docker containers, 
the port would be chosen kind of randomly depending on what else is running on that instance. 
We needed a better way. Something that would work more cleanly on a container environment. 
So, Amazon came out with the Elastic Load Balancer Version 2 or the Application Load Balancer. 
In this case, the balancer is aware, not only of which instance it's sending traffic to, but it knows 
which tasks are running on that instance. And most importantly, it knows what port that task is listening 
on, on that instance at any given time. So, if you're going to use load balancing with ECS, you almost 
certainly want to use ALB.

- Operates at layer 7 (application layer - HTTP/HTTPS). 
- ALB Configure routing based on Target Groups instead of instances as in Classic LB.
- In case of ALB or NLB within your ASG (Auto Scaling Group) configuration, you need to pick 
the Target Groups instead of direct LB.  
- ALB supports multiple SSL Certificates with Rule Based Configuration (Host based).
- ALB supports ECS, EKS, HTTPS, HTTP/2, WebSockets, Access Logs, Sticky Sessions, AWS WAF.

Rules in ALB    
1. Host based  
2. Path based

### Network Load Balancer (NLB)
- Operates at layer 4 (transport layer - TCP/SSL).  
- Extremely highly performant.
- Support static IP and ultra low latency.
- Uninterrupted end-to-end encryption.
- Preserves the client IP.  Cannot perform SSL offloading.
- Supports only TCP packets.  No UDP packets.


### Classic Load Balancer (CLB)
- Supports HTTP, HTTPS, TCP. 
- Operates at layer 4 (transport layer - TCP/SSL) or layer 7 (application layer - HTTP/HTTPS).  
- Even though they can operate at layer 7, they currently require a fixed relationship between 
load balancer port and container port.  One load balancer port cannot be mapped to multiple 
different container ports.  Means you cannot directly load based on url patterns unlike ALB.
