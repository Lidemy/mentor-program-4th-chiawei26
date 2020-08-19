## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
`<figure>`：用於包裝一段獨立的內容（圖像，圖表，照片等等）

`<datails>`：用來延伸或展開訊息內容，當網頁載入時是隱藏收起的狀態。

`<datalist>`：可表現出下拉式選單的樣式，與input元素配合使用該元素，來定義input可能的值



## 請問什麼是盒模型（box modal）
是 html 用於空間定位的模型，每個元素都可視為一個從裡到外有寬高的 content、padding、border 和 margin 的模型

### box-sizing 屬性
content-box：這個是預設屬性，維持`content`原有尺寸大小的情形下做更動，區塊是向外長的。
border-box：用這個屬性的話，這種模式下是以維持`border`原有尺寸大小來做更動，就會把 padding 等考慮進來，而自動做內縮調整。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* inline 元素在同一行呈現，寬度不足時才換行，無法設定寬高及上下距離。
* block 元素以區塊方式呈現，可設定寬高及上下距離。
* inline-block 同時擁有`inline`和`block`的特性，元素在同一行呈現，寬度不足時才換行，但可以設定寬高及上下距離。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* `static`：為預設值，正常的排版流（按照元素的先後順序），無法利用 top、left、bottom、right 調整元素位置

* `relative`：為相對定位，是以元素原本的位置作為定位點來位移，可以利用 top、left、bottom、right 調整元素位置，而且不會影響（推擠）相鄰的元素，而是以推疊的方式覆蓋在其他元素上

* `absolute`：為絕對定位，會跳脫原本的排版流，後面的元素會自動遞補指定元素原本的空間，而被指定的元素則會向上層尋找 position 屬性不是 static 的元素作為定位點，若沒找到就會把 body 當作定位點，一樣可以利用 top、left、bottom、right 調整元素位置，也不會影響（推擠）相鄰的元素，而是以推疊的方式覆蓋在其他元素上


* `fixed`：類似絕對定位，會跳脫原本的排版流，後面的元素會自動遞補指定元素原本的空間，在不以 top、left、bottom、right 調整元素位置時，元素會停留在原本排序的位置，在調整後，元素則是以 viewport 作為定位點進行位移，不會因為滑動頁面造成元素移動，這種模式同樣不會影響（推擠）相鄰的元素，而是以推疊的方式覆蓋在其他元素上

（參考 leaf 同學的答案寫法，對我來說覺得很好理解與記憶）
