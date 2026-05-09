# Alibaba Cloud OSS

## Configuration Information

1. Go to Alibaba Cloud to create a storage bucket.

2. Enter the bucket name in `Bucket`.

3. On the bucket overview page, find the "External Endpoint (Region)" section and copy the value to the `Endpoint` field in the plugin panel. Refer to [OSS Regions and Endpoints](https://help.aliyun.com/document_detail/31837.html).

4. Set the `Region` (Region ID) based on the OSS documentation. The Region ID can be found in the [OSS Regions and Endpoints](https://help.aliyun.com/document_detail/31837.html) documentation.

5. Enter the "External Endpoint - Bucket Domain Name" as the "External Attachment URL".

6. Go to [AccessKey](https://ram.console.aliyun.com/profile/access-keys) to copy the Access Key ID and Access Key Secret, and fill them into `Access Key` and `Secret Key` respectively.