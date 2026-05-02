# 阿裡雲OSS存儲配置

## 配置信息
1. 去阿裡雲創建一個存儲桶
2. 將桶名稱填入`Bucket`
3. 在存儲桶 概覽頁，找到"訪問端口"一欄，將「外網訪問 - Endpoint（地域節點）」複製到插件面板的`Endpoint`，可參考 [OSS地域和訪問域名](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints)
4. `Region` 參考 [OSS地域和訪問域名](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints) 中的"地域ID" 進行填寫
5. `附件訪問URL` 填寫「外網訪問 - Bucket 域名」
6. 前往 [AccessKey](https://ram.console.aliyun.com/profile/access-keys) 複製 Access Key ID 和 Access Key Secret ，並分別填入`Access Key`和`Secret Key`
