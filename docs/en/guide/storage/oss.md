# Alibaba Cloud OSS

## Configuration Information
1. Go to Alibaba Cloud to create a storage bucket.
2. Enter the bucket name in `Bucket`.
3. On the storage bucket overview page, find the "Access Endpoint" section and copy the "External Network Access - Endpoint (Region Node)" to the `Endpoint` field in the plugin panel. For reference, see [OSS Regions and Endpoint Domains](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints).
4. The `Region` should be filled according to the "Region ID" in [OSS Regions and Endpoint Domains](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints).
5. Enter the "External Network Access - Bucket Domain" in `Attachment Access URL`.
6. Go to [AccessKey](https://ram.console.aliyun.com/profile/access-keys) to copy the Access Key ID and Access Key Secret, and fill them in `Access Key` and `Secret Key`, respectively.

2. 将桶名称填入`Bucket`
3. 在存储桶 概览页，找到“访问端口”一栏，将「外网访问 - Endpoint（地域节点）」复制到插件面板的`Endpoint`，可参考 [OSS地域和访问域名](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints)
4. `Region` 参考 [OSS地域和访问域名](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints) 中的“地域ID” 进行填写
5. `附件访问URL` 填写「外网访问 - Bucket 域名」

6. 前往 [AccessKey](https://ram.console.aliyun.com/profile/access-keys) 复制 Access Key ID 和 Access Key Secret ，并分别填入`Access Key`和`Secret Key`

