# Aliyun OSS Storage Configuration

## Configuration

1. Create a bucket on Aliyun
2. Enter the bucket name in `Bucket`
3. On the bucket Overview page, find "Access Endpoint" section, copy "External Network Access - Endpoint (Region Node)" to the plugin panel's `Endpoint`. Refer to [OSS Regions and Access Endpoints](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints)
4. For `Region`, refer to "Region ID" from [OSS Regions and Access Endpoints](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints)
5. For `Attachment Access URL`, enter "External Network Access - Bucket Domain"
6. Go to [AccessKey](https://ram.console.aliyun.com/profile/access-keys) to copy Access Key ID and Access Key Secret, and enter them into `Access Key` and `Secret Key` respectively
