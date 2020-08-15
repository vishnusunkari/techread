---
title: "Placement Groups"
metaTitle: "AWS Placement Groups"
metaDescription: "What is AWS Placement Groups? Placement Groups are logical groupings or clusters of instances in the selected AWS region."
---
### AWS Placement Groups

Placement Groups are logical groupings or clusters of instances in the selected AWS region. 
Placement groups are specifically used for launching cluster compute instance types.  
(e.g. cc2.8xlarge)

### Cluster Placement Groups
- Same AZ (Availability Zone), ideally same hardware.
- For Performance. 
- Adding instances is done ideally by recreating.
- Ideally same type of instances.

### Partition Placement Groups
- Same AZ, but in partitions so is resilient to failure of partitions.  
- Through API or CLI only.
- Large-scale deployments. 
- Ideally same type of instances.

### Spread Placement Groups
- Same or different AZ, more resilient to failures.  
- Small number of critical components, isolated hardware.
- Can be different type of instances.
