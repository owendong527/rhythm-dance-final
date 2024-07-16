## 舞蹈課程|實體課程

提供舞蹈教室課程的平台，讓學員可以透過課程頁面詳盡介紹每門課程的內容，方便家長和學生快速找到合適的課程。另外也有提供快速入門資訊，以及教室消息讓學員可以清楚知道教室目前動向。

## 功能

前台

- 顯示課程列表
- 依照類別篩選課程
- 查看課程簡介
- 查看課程簡介，還可以查看同類型的課程
- 同類別課程列表
- 查看文章列表
- 優惠卷使用折扣碼
- 課程加入購物車與移除
- 顯示結帳清單列表
- 顯示結帳清單進行付款
- 填寫報名人資訊、表單驗證、送出訂單


後台(管理者)

- 檢視課程列表
- 管理新增預約課程品項
- 管理刪除預約課程品項
- 管理編輯預約課程品項
- 檢視預約課程訂單列表
- 檢視課程訂單
- 刪除未付款的課程訂單


## 專案技術
Vue3 / Vite / Vue Router / Bootstrap5 / Sass / RESTful API / Pinia

### 安裝套件

```bash
npm install
```

### 啟動開發環境

```bash
npm run dev
```

### 打包專案

```bash
npm run build
```

### 部署專案

```bash
npm run deploy
```

## 套件

以下是已經安裝在專案中的套件。

- axios (^1.6.5)
- bootstrap (^5.3.2)
- bootstrap-icons (^1.11.3)
- dotenv (^16.3.1)
- pinia (^2.1.7)
- vue (^3.3.11)
- vue-router (^4.2.5)
- @vitejs/plugin-vue (^4.5.2)
- eslint (^8.49.0)
- eslint-config-airbnb-base (^15.0.0)
- eslint-import-resolver-alias (^1.1.2)
- eslint-plugin-import (^2.29.1)
- eslint-plugin-n (^16.6.2)
- eslint-plugin-promise (^6.1.1)
- eslint-plugin-vue (^9.20.1)
- gh-pages (^6.1.1)
- sass (^1.69.7)
- vite (^5.0.10)
- vite-plugin-eslint (^1.8.1)

## 資料夾結構

- `.vscode`：Visual Studio Code 的設定檔
- `dist`：打包後的檔案
- `public`：公開的靜態檔案
- `src`：專案的程式碼
  - `assets`：靜態檔案
  - `components`：元件
  - `router`：路由
  - `store`：狀態管理
  - `views`：頁面
  - `App.vue`：根元件
  - `main.js`：進入點
- `.env.example`：環境變數範本
- `.eslintrc.js`：ESLint 設定檔
- `.gitignore`：Git 忽略檔案
- `.nvmrc`：Node.js 版本
- `index.html`：進入點 HTML
- `package-lock.json`：套件版本鎖定
- `package.json`：專案資訊
- `README.md`：專案說明
- `vite.config.js`：Vite 設定檔

## gh-pages 部署說明

內建預設是使用 gh-pages 進行部署，因此只需要在專案根目錄下執行以下指令即可。

```bash
npm run deploy
```

