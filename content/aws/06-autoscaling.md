---
title: "Autoscaling"
metaTitle: "Autoscaling"
metaDescription: "What is AWS Autoscaling.  Auto Scaling Group. Common problems with Autoscaling and solutions"
---

### AutoScaling
Whenever your application is loaded up either with high traffic or because of other intensive load, 
you need to scale the system so the system has capacity to serve the load.  Autoscaling is when this 
is done automatically without bringing the system down meaning scaling up when there is heavy load and 
scaling down when the load has subsided.

### ASG (Auto Scaling Group)

- Old way of creating ASG is via Launch Configuration which is immutable.  If you wanted to make 
any changes you had to create a new one.  
- New way is Launch Template which can be extended or versioned.
- Best practice is to design with minimal number of resources in each AZ so to have buffered (minimum)
resources in a separate AZ.
- ASG Health Check Type: Change from EC2 to ELB which checks for the health checks of applications
 running on EC2 instead of just EC2 nodes health check.

### Common Problems with Autoscaling complex systems

- **Scaling on different metrics**  
Scaling up on cpu usage and scaling down on memory usage leads to oscillations.

- **Scaling on muliple metrics**  
When its based on both cpu and memory, scaling up goes fine but if one of 
the metric is not matching leads to oscillations when scaling down.

- **Scaling at different rates - Resonance**  
Make sure you scale up at different rate than scaling down during oscillation load patterns.

- **Thundering herds**  
If you receive enough traffic that it actually takes your system down. 
Your system stops responding. Then, as soon as you try to bring the system back up, if it 
tries to come up at the lowest load so you have your minimum number of services set to one 
and your maximum set to 10,000 but your system starts at one, every time you try to bring 
it up that first service to come up will fall over and die. If the first service to come up 
falls over and dies immediately, then the load never increases enough to drive the loading metrics. 
So the system never scales up

**Summary**  
In general, the word of wisdom here is keep it simple. Choose a simple scaling system that you can hold 
in your head all the time and then monitor it, monitor everything about it and monitor it constantly, 
and learn from the patterns of your own system.