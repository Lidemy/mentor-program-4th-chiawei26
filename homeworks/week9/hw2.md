## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
- 選擇適當的欄位型態可以減少資源的占用。
### VARCHAR
- 可以設定該欄位的字元長度
- 可以建立 index

### TEXT
- text 不可以設定該欄位的字元長度
- TEXT 不能建立 index，所以如果要建立 index 就要使用 VARCHAR。



## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
- cookie 是儲存在瀏覽器內的小型文字檔
- Client 端透過瀏覽器發送 Request 給 Server，Server 端回傳 Response 時，在 Header 內 Set-Cookie，把資料寫到 Cookie 內。這個 Cookie 會被儲存在 Client 端的瀏覽器內，Client 端下次再次發出 Request 給 Server 時，request 會自動把儲存在瀏覽器內的 Cookie 帶上去，server 就可以依據 cookie 的資訊來判斷使用者的狀態




## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
- 沒有遺忘帳號密碼要如何處理的功能
- 課程影片提過由於 cookie 能被簡單取代串改，可能導致不知道登入他人帳密也能比較簡單的用他人身份發言問題。
- 沒有防止狂刷註冊帳密的功能
