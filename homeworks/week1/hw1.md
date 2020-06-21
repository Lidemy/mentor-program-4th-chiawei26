## 交作業流程




## 1.新增一個 branch
- git branch week1
*一定要在新的 branch 上寫作業*

## 2.切換到 branch
- git checkout week1


## 3.開始寫當週作業
*格式為 markdown，寫完所有作業再上傳*

## 4.寫完後把所有檔案加入 staged
- git add.

## 5.commit
- git commit -am 'week1 homework done'

## 6.確認檔案都不用 commit
- git status

## 7.把現在 local 的 branch week1 push 到 GitHub 的 branch week1
- git push origin week1

## 8.在 GitHub 裡的 week1 可以 merge 了
*點選 compare & pull request or New pull request*

## 9.在學習系統的作業列表新增作業
*PR連結：GitHub 上的 pull request 的網址*

## 10.等作業改完變成 merge 後，就可以把遠端的 master 同步回本地的 master
- git check out master
- git pull origin master


## 11.再刪除本地端的 week1 branch
- git branch -d week1

## 12.git log 看到 week1 完成

## 補充
更新課表後再去看 MTR04－特殊情形，複習如何更新回本地端