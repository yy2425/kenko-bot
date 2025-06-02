# kenko-bot

このリポジトリは、GitHub Actionsを使って毎日自動で健康日誌に体温（36.2℃～36.6℃のランダム）・居住地を入力送信するBotです。

個人のGitHubアカウントのActions上で動かすことを想定しています。

Puppeteerを使ってChrome上でJavaScriptを動かす`Script.js`とこれを毎日自動で実行する`Auto_Health_Report.yml`という二つのコードで構成されています。

処理の成功可否はメールで通知することができます（右上のプロフィール→Notifications→System→Actions）が、きちんと提出されてるかは判定できないので各自でモニターしてください。

### Slackに通知を送ることもできます。

https://github.com/Babababassaa/kenko-bot-notification

---

## 使い方

### 1. リポジトリをフォークする

右上の「Fork」ボタンを押して、自分のGitHubアカウントにリポジトリをコピーしてください。

### 2. `Script.js` の設定を変更

フォークしたリポジトリの `Script.js` ファイル内の以下の項目を自分の情報に書き換えてください。

```js
const username = "ユーザーID（半角）";
const password = "パスワード（半角）";
const location = "居住地（全角可）";
```

### 3. GitHub Actionsの設定
`Auto_Health_Report.yml`の中で自動で入力送信する時間を設定します。好みの時間に設定してください。

入力後は四行目の頭にある「#」を削除してください。

一時的に自動入力を止めたい場合は、四行目の頭に「#」を入力してください。

注意①UTCで入力すること

注意②"00"と入力するとエラーを吐く可能性があるので、On the Hourなどは"0"一つだけ入力すること（例：「0 23」で0800JSTになる）

### 4. 手動で実行（任意）
GitHubのActionsタブからワークフローを選択し、「Run workflow」ボタンで手動で実行することも可能です。

### 5. 注意事項
個人の責任で行ってください。これを使用したことによる不利益には責任を負いません。

GitHub Actions仕様上、動作が設定した時間から数十分程度前後する可能性があります。

URLやコードの流出が無いように扱いには十分注意してください。

GitHub Actionsの無料枠制限に注意してください。

体調が悪くなったら手入力しましょう。
