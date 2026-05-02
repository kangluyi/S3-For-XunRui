# アリババクラウドOSSストレージ設定

## 設定情報
1. アリババクラウドでストレージポータルを作成します
2. ポータル名を`Bucket`に入力します
3. ストレージポータルの概要ページで「アクセスポート」欄を見つけ、「外部ネットワークアクセス - Endpoint（リージョン情報）」をプラグイン面板の`Endpoint`にコピーします。[OSS地域とアクセスドメイン](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints)を参照
4. `Region`は[OSS地域とアクセスドメイン](https://help.aliyun.com/zh/oss/user-guide/regions-and-endpoints)の「地域ID」を参照して入力します
5. `附件訪問URL`には「外部ネットワークアクセス - Bucket ドメイン」を入力します
6. [AccessKey](https://ram.console.aliyun.com/profile/access-keys)に移動してAccess Key IDとAccess Key Secretをコピーし、`Access Key`と`Secret Key`にそれぞれ入力します
