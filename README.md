# kenko-bot

このリポジトリは、GitHub Actionsを使って毎日自動で健康報告フォームに入力・送信するBotです。  
個人のGitHubアカウントのActions上で動かすことを想定しています。

---

## 使い方

### 1. リポジトリをフォーク（自分のアカウントにコピー）する

右上の「Fork」ボタンを押して、自分のGitHubアカウントにリポジトリをコピーしてください。

### 2. `Script.js` の設定を変更

フォークしたリポジトリの `Script.js` ファイル内の以下の項目を自分の情報に書き換えてください。

```js
const username = "あなたのユーザーID";
const password = "あなたのパスワード";
const location = "あなたの居住地";

```

### 3. Secrets（シークレット）の設定（推奨）
パスワードなどの情報を直接コードに書くのは安全ではありません。
GitHubリポジトリの「Settings」>「Secrets and variables」>「Actions」から

USERNAME

PASSWORD

LOCATION

という名前でシークレットを登録し、Script.jsでこれらを参照するようにコードを書き換えることを推奨します。

例：
js

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const location = process.env.LOCATION;

### 4. GitHub Actionsの設定を確認
すでに .github/workflows/Auto_Health_Report.yml の設定が入っています。
これにより毎日決まった時間に自動実行されます。

スケジュールは cron 形式で設定されているので、自分のタイムゾーンや時間に合わせて変更できます。

### 5. 手動実行（任意）
GitHubのActionsタブからワークフローを選択し、「Run workflow」ボタンで手動実行も可能です。

注意事項
自動入力は対象サイトの規約を必ず確認し、ルールを守ってください。

シークレットの管理は慎重に行ってください（パスワードを公開しないこと）。

GitHub Actionsの無料枠制限に注意してください（毎月の利用時間など）。

ライセンス
このリポジトリはMITライセンスです。詳しくはLICENSEファイルを参照してください。
