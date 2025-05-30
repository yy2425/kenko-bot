const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    protocolTimeout: 60000,
  });

  const page = await browser.newPage();
  // 下の三行は自分で入力
  const username = "";
  const password = "";
  const location = "";

  const targetUrl = "https://kenko:kenko-cac@ems4.kouku-dai.ac.jp/~take/kenko/";

  // ページ遷移（タイムアウトを60秒）
  await page.goto(targetUrl, { waitUntil: "networkidle2", timeout: 60000 });

  // ログインフォーム入力
  await page.type("#gno", username);
  await page.type("#pass", password);
  await page.click("#loginButton");

  // 新規入力ボタンが表示されるのを待機してクリック
  await page.waitForSelector("#k01Button", { visible: true });
  const inputButton = await page.$("#k01Button");
  await inputButton.evaluate(el => el.scrollIntoView());
  await inputButton.click();

  // ラジオボタンは click で選択
  await page.click('input[name="toi0"][value="1"]');

  // 体温入力（inputイベント発火付き）
  const temp = (Math.floor(Math.random() * 5) + 2) / 10 + 36.0;
  const [intPart, decimalPart] = temp.toFixed(1).split(".");
  await page.evaluate((intPart, decimalPart) => {
    const temp1 = document.querySelector("#temp1");
    temp1.value = intPart;
    temp1.dispatchEvent(new Event("input", { bubbles: true }));

    const temp2 = document.querySelector("#temp2");
    temp2.value = decimalPart;
    temp2.dispatchEvent(new Event("input", { bubbles: true }));
  }, intPart, decimalPart);
  
  // 居住地入力（inputイベント発火付き）
  await page.evaluate((location) => {
    const tf2 = document.querySelector("#tf2");
    tf2.value = location;
    tf2.dispatchEvent(new Event("input", { bubbles: true }));
  }, location);
  
  // 送信ボタンをクリック
  await page.click("#sendButton");
  await new Promise(r => setTimeout(r, 5000));

  await browser.close();
})();
