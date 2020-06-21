## 跟你朋友介紹 Git



## Git是什麼
git 就是個幫你做版本控制的程式，優點是能保留每個版本狀態。

### git init 
* 在要做版控的資料夾，並下 git init 做初始化，完成之後就會看到多了.git 的隱藏子資料夾，其中包含所有 git 要的檔案。

### git status

* 查看 work directory 的檔案狀態
（untracked）未追蹤：沒有被版控的檔案
（modified） 已更改
（staged）   等提交：git add 後，會在暫存區（stage）
（committed）已提交：把 staged 的檔案執行 git commit後，便會為（repo）儲存區

### git add
* git add (檔名)：加入版控
* git add . :一次加入所有檔案

### git commit
* git commit 建立新版本，把 staged 的檔案放入 repository
只打 commit 會進入 vim  編輯器，要在裡面輸入 commit 訊息
* git commit -m "first commit"可以直接帶訊息

### git log
* 可以看所有提交紀錄
* git commit --oneline 顯示簡短的 git log

### git rm
* git rm --cached <檔名> 可以把檔案從 staged 或 committed 狀態中移除版控

### git checkout
* git checkout <版本（commit）> 可以回到指定的版本時狀態

### .gitignore
* 新增.gitignore 若有檔案寫入該檔案則會被 git 忽略，專門放不用被版控的檔案

### git diff
* 可以查看這次要 commit 前和上一個版本的差別

### branch
* 支線的意思，能夠從主幹拉出來單獨開發，最後再 merge 回主幹即可，能確保主幹穩定

### git branch -v
* 可以查看目前有哪些 branch，亮綠色代表目前所在的分區

### git branch
* git branch <branchname>，已目前 branch 為基準，複製一個新的分支

### git checkout
* git checkout <branchname>，切換到指定的 branch 底下

### git  merge
* git merge <branchname>，可以把該 branch 合併到當下的工作目錄

### git branch -d
* git branch -d <branchname>，可刪除該 branch
* 通常開發完該 branch 合併回主線後，就可以刪除分支以保持乾淨的專案內容

### 處理 merge 後的 conflict
* 如果 branch 在合併的時候檔案有衝突，內容不同 git 無法判斷該以那個為基準時，要手動修改儲存檔案後，再 git commit -am 'resolve the conflict'

### GitHub
* 一個把 git repository 具象化的一個網站

### git push (from local)

* 在 github 新增 repo 後回到本地端，要將本地端的 repo push 上去
* git push origin <branch name>，把當下分支 push 上 remote repository

### git pull (pull remote repo at local)
* github 可以在線上編輯 code，做過變動要同步在本地端時，下 git pull origin master，從遠端 origin pull master branch 下來
* 如果在遠端做更新後，本地端一定要先 git pull 將最新版同步，才能再做 git push!
* 如果 git pull 後發現遠端的與本地端有檔案的內容有衝突，那在 pull 結束後會顯示 conflict，改掉衝突再 commit & push 即可。
