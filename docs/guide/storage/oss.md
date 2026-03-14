## 配置信息
1. 去阿里云创建一个存储桶
2. 将桶名称填入`Bucket`
3. 在存储桶 概览页，找到“访问端口”一栏，将「外网访问 - Endpoint（地域节点）」复制到插件面板的`Endpoint`，可参考 [OSS地域和访问域名](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints)
4. `Region` 参考 [OSS地域和访问域名](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints) 中的“地域ID” 进行填写
5. `附件访问URL` 填写「外网访问 - Bucket 域名」
6. 前往 [AccessKey](https://ram.console.aliyun.com/profile/access-keys) 复制 Access Key ID 和 Access Key Secret ，并分别填入`Acess Key`和`Secret Key`