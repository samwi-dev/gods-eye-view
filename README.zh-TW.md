<div align="center">

# 🌐 God's Eye View（天眼視界）

[![CI](https://github.com/bilawalsidhu/gods-eye-view/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bilawalsidhu/gods-eye-view/actions/workflows/ci.yml)

### 一個裝在瀏覽器裡的間諜衛星模擬器——然後你會發現，這些資料來源全都是公開的，而且是真實的。

擬真 3D 地球。即時飛機、船艦、衛星、地震、路況與公開攝影機。由即時 AI 代理驅動的免持語音控制。

_天羅地網，無所遁形。_

![Orbital HUD, a tracked live globe, FLIR terrain — then OPEN SOURCED](docs/media/hero-open-source-reveal.gif)

<a href="https://www.youtube.com/@bilawalsidhu">
  <img src="docs/media/youtube-popular-videos.png" alt="The God's Eye View video series on YouTube" width="100%">
</a>

▶️ **來自爆紅系列影片 God's Eye View 背後的專案**（前身為 WorldView）— [YouTube 累積 500 萬+ 觀看](https://youtube.com/playlist?list=PL6qSg2I-7_koPbDnSMo0QeeHX_RknA2uv&si=nBGYMoHWQw41v93Q) · [全平台累積 2500 萬+](https://www.google.com/search?q=god%27s+eye+view)

[![Reached #1 on GitHub Trending](https://img.shields.io/badge/%231_GitHub_Trending-thank_you!-F0A63C?style=flat-square&logo=github)](https://x.com/bilawalsidhu/status/2093798887815348521)

🏆 **2026 年 8 月，日榜與週榜雙雙登上 GitHub Trending 第一名**

**[Product Hunt 當日第 8 名](https://www.producthunt.com/products/god-s-eye-view?launch=god-s-eye-view)** · 由 hashtag 發明人 Chris Messina 推薦上架

_「相當酷」_ — [Brendan Eich](https://x.com/BrendanEich/status/2094592096401490266)，JavaScript 發明人、Mozilla 與 Brave 共同創辦人 · 曾登上 **[Pinokio](https://pinokio.co/posts/01m1m4p9xxm3qw7dnnpj2wr93g)** 精選

⚡ **免 API 金鑰即可開始。** 用 [Pinokio](https://pinokio.co/apps/github-com-bilawalsidhu-gods-eye-view) 安裝，或在終端機本機執行。金鑰可在應用程式內另外選擇性新增。**[→ 快速開始](#-快速開始)**

</div>

---

<div align="center">

**[快速開始](#-快速開始) · [開局前五分鐘](#-開局前五分鐘) · [用語音操作](#️-用語音操作) · [地球上有什麼](#️-地球上有什麼) · [底層架構](#-底層架構) · [金鑰與費用](#-api-金鑰)**

</div>

---

## 🌍 為什麼會有這個專案

God's Eye View 把公開的訊號都放進同一顆可探索的地球。即時追蹤這個世界。用語音跟它對話。把它玩壞。延伸它的可能性。

飛機的電子訊號、船舶的信標、軌道根數、地震儀，以及公開攝影機，早已經告訴我們很多關於這個世界的事。God's Eye View 把這些資料整合到同一個地方，讓你可以在「全球宏觀視角」與「單一飛機、船艦或街道」之間自由切換。它在你的瀏覽器裡本機執行，原始碼可供檢視與延伸。

> 一半的魔力來自它看起來像個不該讓你進入的座艙。另一半的魔力，是每一行程式碼都攤在陽光下、可供檢視。

大多數資料來源都是即時或定期更新的。路況是依據真實道路、搭配聚合式位置資料所模擬出來的。CCTV 攝影機的姿態與火箭發射軌跡，屬於粗略估計值。

先從內建的資料來源開始探索，之後再加入你自己的來源——每個圖層都是獨立模組。

---

## 🎛️ 這個東西能做什麼

- **🛩️ 座艙視角：** 乘坐一架被追蹤中的飛機——鏡頭會全程貼著你腳下的地形，一路跟到底。
- **📡 接觸目標：** 250 公里範圍內所有目標的完整清單——逐一瀏覽即時飛機，一鍵切入任何一台的座艙視角。
- **🎯 點擊即可追蹤任何目標：** 鏡頭鎖定、拖出漸淡軌跡、顯示完整詮釋資料——被追蹤的火點或船艦還會一鍵幫你切到最近的即時攝影機。
- **🖊️ 語音白板：** 用語音在世界地圖上標註——真實的邊界多邊形、標記與路線。
- **🛫 3D 機庫：** 依機型分類的真實 3D 模型——787、ATR-72、Citation、Bell 206、MQ-9——被追蹤目標會隨著你拉近視角，從圖示自動換成 3D 模型。
- **🎨 重塑真實世界的濾鏡：** 在一般地球畫面上疊加 GLSL 感測器風格——CRT、夜視鏡、FLIR／熱成像、黑色電影、雪景。
- **🟩 偵測疊層：** 為畫面中所有目標繪製螢幕空間的邊框與識別標籤。
- **🎖️ 軍規 HUD：** 具備情報風格遙測資訊的戰術抬頭顯示器。
- **🌐 全域情資：** 一鍵搭建完整態勢畫面——離開時還能精準還原你原本的視角。
- **🎥 場景導演：** 擷取電影感十足的鏡頭運鏡，用於剪輯與展示。
- **🔗 分享連結：** 鏡頭、風格、圖層，甚至一個被追蹤的目標，都能序列化進一個網址——一個即時目標是「交接」，不只是「書籤」。
- **🏠 重設地球：** 一個按鈕、或一句話，就能瞬間回到完整地球視角。

---

<div align="center">

[![YouTube video about the God's Eye View open source release](https://img.youtube.com/vi/GRJaKcXZS94/maxresdefault.jpg)](https://www.youtube.com/watch?v=GRJaKcXZS94)

▶️ **[以下所有內容的完整實機導覽影片（YouTube）](https://www.youtube.com/watch?v=GRJaKcXZS94)**

</div>

## ⚡ 快速開始

**不需要帳號或 API 金鑰即可開始。** 兩種安裝路徑打開的是同一個應用程式，內建 Esri 衛星影像與免金鑰地形。若 Esri 無法連線，會自動改用 OSM 作為備援。飛機、軍事航跡、衛星、地震、公開攝影機、電台與發射任務，全都不需要金鑰即可使用。

若想要擬真 3D，可加入符合資格之個人非商業用途的 **Cesium ion token**，或使用 **Google Maps 金鑰** 走直連、計費的路線並開通應用程式內的地點搜尋。實際使用受供應商條款與額度限制。金鑰可透過應用程式內的 **POWER UP（動力全開）** 面板新增；詳見 [金鑰與費用](#-api-金鑰)。

### 路徑一 — 一鍵安裝，不需終端機

1. 安裝或更新 [Pinokio](https://desktop.pinokio.co/) 至 **8.2 版或以上**。
2. 開啟 [Pinokio 上的 God's Eye View](https://pinokio.co/apps/github-com-bilawalsidhu-gods-eye-view)。
3. 點擊 **Install**，再點擊 **Start**。

支援 **Windows、macOS 與 Linux**。Pinokio 維護者回報已完成修正版安裝程式的跨平台測試。啟動器會安裝鎖定版本的相依套件、尋找可用的本機連接埠，並開啟應用程式。

**之前試過但安裝失敗？** 更新 Pinokio 後再試一次。8.2 版已修正啟動器的安裝問題；[詳見 Pinokio 維護者的說明](https://pinokio.co/posts/01m1m4p9xxm3qw7dnnpj2wr93g)。

### 路徑二 — 終端機／程式碼代理

請使用 **Node.js 24.x（24.14.0 或以上）或 26.x**。setup doctor 會針對已進入生命週期終止（EOL）的 Node 25 提出警告。

```bash
git clone https://github.com/bilawalsidhu/gods-eye-view.git
cd gods-eye-view
npm ci
npm run doctor
npm run dev
```

開啟 **`http://localhost:4173`**。在首次啟動面板中選擇 **即時接觸目標**、**太空任務**、**環境監測**，或 **手動探索**。

<details>
<summary>啟動效能</summary>

在 M5／Chrome 上的某次時間點量測，中位數冷啟動時間為 1.86 秒。這只是一個比較基準，不保證你的機器或網路連線也會有相同表現。詳見 [docs/PERFORMANCE.md](docs/PERFORMANCE.md)。

</details>

**macOS 捷徑：** `./scripts/dev-fresh.sh` 會清除 Vite 快取，並直接從 Keychain 讀取已設定的金鑰。同樣支援無金鑰啟動。

### 接著再開通更多功能——在應用程式裡設定，不需要編輯檔案

金鑰是「升級」，不是「先決條件」。想要新增金鑰時，點擊右下角的 **POWER UP（動力全開）** 晶片：Provider Settings（供應商設定）會列出所有支援的金鑰、各自能開通什麼功能，以及去哪裡取得。貼上金鑰、按下 **SAVE KEYS（儲存金鑰）**，應用程式就會自動重新啟動並套用新功能。全部設定完成後，晶片文字會顯示為 **POWERED UP**——如果精簡版面把它藏起來了，用網址參數 `?setup=1` 即可重新開啟同一個面板。

- **金鑰儲存在哪裡：** Pinokio 安裝路徑 → 應用程式自身、已被 Git 忽略的 `pinokio/ENVIRONMENT`；終端機 clone → repo 根目錄的 `.env`。任一檔案在寫入機密資料**之前**都會先被設為僅限擁有者存取。這些都是本機明文檔案，已排除在 Git 版本控制之外；應用程式會用你的金鑰去連線各供應商。
- **你原本就有的金鑰不會被動到：** 來自你的 shell 環境變數或 macOS Keychain 的數值，會顯示為「已由外部設定」，在面板中僅供顯示、不可編輯。
- **建議優先取得的金鑰：** 免費的 [Cesium ion](https://cesium.com/ion) token（適用符合資格的個人非商業用途；實際情況依當前條款與額度而定），可解鎖擬真 3D 與世界地形；只有在需要計費、直連 Google 的路線與地點搜尋時，才需要 Google Maps 金鑰；想要語音對話則需要 OpenAI 金鑰。完整費用說明請見 [金鑰與費用](#-api-金鑰)。

<details>
<summary>較舊版本的 Pinokio 與憑證儲存方式</summary>

請勿在 Pinokio 8.0.40 內建的 **Configure** 面板中輸入憑證：該版本無法正確儲存這個巢狀的應用程式檔案，而且會把送出的數值寫進紀錄。請改用 GEV 應用程式內的 **POWER UP → Provider Settings**。Pinokio 8.2 的公告只修正了安裝問題，並未確認這個獨立的 Configure 問題已經解決。在 macOS 上，透過 `./scripts/dev-fresh.sh` 使用 Keychain 仍是較安全的儲存方式。

</details>

兩種安裝路徑的伺服器都只綁定在 **localhost**，且 Provider Settings 只回應來自本機的請求。瀏覽器端會用到的金鑰（Google Maps、Cesium ion）務必在供應商後台設定存取限制——做法請見 [SECURITY.md](SECURITY.md)，其中也一併說明了區網分享的相關規則，可與 [金鑰與費用](#-api-金鑰) 對照閱讀。

---

## 🕐 開局前五分鐘

選一個首次啟動任務，或依序試試以下步驟。GIF 畫面呈現的是 Google 擬真 3D；你實際看到的初始底圖，取決於你設定了哪些金鑰。

1. **點亮天空。** 選擇 **即時接觸目標** 任務（或自行開啟 **飛機** 圖層）——數千架依真實遙測資料飛行的即時飛機，偵測網格已經在解讀畫面。點一架飛機：鏡頭會鎖定它、拖出軌跡，並顯示它的即時遙測卡片。
2. **接管操縱桿。** 對你追蹤中的飛機按下 **座艙視角**，跟著它一路下降，途中切換感測器：從夜視鏡切到 Ironbow 熱成像。

![Riding with a live aircraft in cockpit view while switching sensor modes](docs/media/06-cockpit-ar.gif)

3. **降落在忙碌的機場。** 搜尋一座機場，開啟 **3D** 飛機模型後下降到滑行道——地面上的飛機、滑行軌跡，整座機坪即時運作中。

![Moving from a full airport overhead down to close taxiway inspection with 3D flight models](docs/media/start-here/airport-ground-traffic-google-3d.gif)

4. **透過公開攝影機看世界。** 在奧斯汀、倫敦、加州或芬蘭開啟 **CCTV**。這些畫面不是網路攝影機的嵌入影片——它們會被投影**進入** 3D 城市之中。把覆蓋模式切到 **VIEWSHED（視域範圍）**，每台攝影機都會畫出它估計的可視範圍——哪裡看得到、哪裡是死角。

![Diving into an Austin intersection with a live public camera projected into the 3D scene](docs/media/03-austin-cctv.gif)

5. **追蹤軌道上的目標。** 開啟 **衛星** 圖層並點擊 ISS——你會跟著它在軌道高度飛行，軌道環一併顯示。

![Tracking the ISS along its orbital path as it crosses over Ukraine](docs/media/14-iss-over-ukraine.gif)

6. **切換視覺風格。** 按 `1`–`7` 數字鍵——CRT、夜視鏡、熱成像——整顆即時地球會透過不同的感測器重新演算畫面。

![Cycling a dense live globe through CRT, FLIR, and NVG in one continuous view](docs/media/01-style-sweep.gif)

7. **用語音跟它對話**（需要 OpenAI 金鑰）：_「帶我去洛杉磯機場，選取最近的一架在空中的飛機。」_
8. **回家。** 按下 **重設地球**——或直接說 _「拉遠到完整地球視角」_。

**鍵盤操作：** `1`–`7` 視覺風格 · `H` HUD · `D` 偵測 · `C` 座艙 · `Esc` 離開。

---

## 🛩️ 座艙視角

> 每一架飛機都該讓你這樣體驗一次。

真正即時運作的座艙模式，建構自即時飛航資料：鏡頭會全程貼著你追蹤目標腳下的真實地形往下飛——感測器風格也會一起套用，而 **接觸目標** 讓你隨時只要一鍵，就能切換 250 公里範圍內的清單：從一架飛機跳到下一架，直接跌進下一個座艙視角。

![Jumping between live aircraft and falling straight into a cockpit view](docs/media/12-switch-aircraft-cockpit.gif)

座艙甚至內建自己的簡報跑馬燈：鄰近即時訊號、區域頭條新聞，以及真實的在地天氣——還有一個可選開啟的 **WX（天氣）** 模式，會依你飛機周圍的實際觀測資料，演算出立體雲層效果。

![A live military contact ridden through Normal, NVG, and Ironbow FLIR with dense detection](docs/media/start-here/military-cockpit-dense-google-3d.gif)

_座艙模式存在的意義：你正騎乘在一架真實飛機上、飛越真實地形——而你可以自己決定透過哪種感測器來觀看這個世界。_

---

## 🎙️ 用語音操作

> 語音功能需要一組 **OpenAI 金鑰**。沒有金鑰時整個應用程式依然能正常運作——只是麥克風按鈕會提示語音功能無法使用。同一組金鑰也驅動 **AI HUD 摘要**：一句簡短、情報風格的五個詞摘要，會隨著你移動視角即時重新產生。

點擊 **GEV MIC**、授予麥克風權限，直接開口說話即可。這不只是語音遙控器：

- **🧠 它知道自己正在看什麼。** 代理在回答前會先取得即時場景脈絡——包含座標、街道名稱、已啟用的圖層與畫面比例尺。飛行途中問它 _「這是哪個城市？」_，它答得出來。
- **🎯 目標問答。** 點擊任何一架飛機、船艦或資料中心，問它 _「這是什麼？」_，它會依該物件的即時遙測資料回答。
- **👁️ 視覺辨識。** 在街道等級視角，它會讀取畫面截圖以辨識清晰可辨的招牌與建築名稱，且系統明確指示它不得憑空捏造標籤。
- **🎬 電影感運鏡。** _「讓我看看頭頂上的飛機」_ 會把鏡頭拉遠、調整角度，像導演一樣為即時空中交通取景。
- **🔒 誠實且安全。** 代理只會確認真正成功執行的動作。你的 `OPENAI_API_KEY` 完全不會出現在瀏覽器端；前端只會拿到一組短效的連線 token。

二十八種工具，四大類任務——以下指令都直接取自產品自身的語音測試套件與工具手冊：

**🎥 導演鏡頭** — 如無人機操作員般的鏡頭指令：

> 🗣️ _「帶我去東京。」_ · _「繞著這個區域慢慢環繞。」_ · _「畫出從國會大廈到 Zilker 公園的步行路線。」_ → _「照我們剛畫的路線飛。」_ · _「拉遠到完整地球視角。」_

**🖊️ 標註世界** — 在真實世界上的白板：

> 🗣️ _「圈出德州的範圍。」_ · _「標註德州州議會大廈及其周邊範圍」_——它畫出的是**真正貼合邊界的形狀**，不是一個圓圈。 · _「艾菲爾鐵塔離羅浮宮有多遠？」_——會出現一條連接箭頭，並語音報出距離。所有標註都會保留，直到你說 _「清除地圖標註」_。

**✍️ 或自己手動繪製** — DISPLAY（顯示）▸ **繪製**：選擇區域、線段或標記點，在真實世界上點擊頂點，雙擊完成繪製，再加上標籤。同一個白板、同樣會被保留，不需要麥克風。

![Zilker Park and Lady Bird Lake drawing onto the 3D city as persistent vector annotations, by voice](docs/media/01-voice-annotate-zilker.gif)

![A spoken distance measurement spanning an airport, inspected from orbit](docs/media/04-airport-distance.gif)

**🔎 情報詢問** — 針對即時圖層的分析式提問：

> 🗣️ _「現在德州上空有多少班飛機？」_ · _「哪些船正開往奧克蘭？」_ · _「洛杉磯附近最大的火點在哪？」_ · _「有沒有東西飛在四萬英尺以上？」_ · _「ISS 下次什麼時候會經過？」_

**🎛️ 操作整台主控台** — 完全免持：

> 🗣️ _「切換成夜視模式，並開啟飛機圖層。」_ · _「開啟攝影機的視域範圍。」_ · _「播放奧斯汀附近的新聞電台。」_ · _「追蹤那架飛機。」_ → _「進入座艙。」_

**還有快問快答等級的指令** — 一句話搞定：

> 🗣️ _「讓我看看全球基礎設施。」_（自動搭建圖層並拉遠至地球視角） · _「播放 Orbital Watch。」_（一段完整的電影式場景） · _「把偵測密度設成百分之五十。」_ · _「下一個接觸目標——只看直升機。」_（座艙模式中） · _「讓我看看太空任務。」_ · _「切換成 OSM。」_ · _「畫面稍微銳化一點。」_ · _「切換成戰術版面。」_ · _「現在有哪些功能是開啟的？」_

![The globe populating with the world's radio stations as another live layer](docs/media/15-global-radio-layer.gif)

_問任何地方的電台，地球就會開始廣播——每個電台都是真實存在、可以直接飛過去的地方。_

---

## 🛰️ 地球上有什麼

十五個圖層與地圖來源。**其中十三個不需要金鑰即可使用。** 部分圖層加上供應商金鑰後能開通額外功能。（🟢 免金鑰 · 🟡 免費金鑰 · 🔴 計費制。）

| 圖層                      | 你會得到什麼                                                                                                                                                                                                                                                                                                                                                                        | 資料來源                                  | 授權需求                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 🗺️ **地圖來源堆疊**            | Esri 衛星影像、Google 擬真 3D、OSM，另有更多 ion 代管的地圖堆疊                                                                                                                                                                                                                                                                                                            | Esri / Google / Ion / OSM               | 🟢 Esri 衛星影像 + OSM · 🟡 ion 代管的 Google 3D + 世界地形 · 🔴 直連 Google + 地點搜尋 |
| ✈️ **即時飛航**         | 11,000+ 架即時飛機 + 航跡歷史紀錄                                                                                                                                                                                                                                                                                                                                               | OpenSky + adsb.lol                      | 🟢（🟡 可選用以取得更多查詢額度）                                                           |
| 🎖️ **軍事飛航**     | 以琥珀色顯示的 ADS-B 軍事航跡                                                                                                                                                                                                                                                                                                                                                    | adsb.lol                                | 🟢                                                                                                  |
| 🚢 **即時船艦動態**         | 全球數千艘船艦                                                                                                                                                                                                                                                                                                                                                        | AISStream                               | 🟡                                                                                                  |
| 🛰️ **衛星**           | 838 個目標的目錄，依類別上色並附即時圖例——**密集** 模式會一次載入整個 Starlink 星鏈                                                                                                                                                                                                                                                                                  | CelesTrak                               | 🟢                                                                                                  |
| 🌍 **地震**          | 全球地震活動，最近 24 小時                                                                                                                                                                                                                                                                                                                                                   | USGS                                    | 🟢                                                                                                  |
| 🚗 **路況**              | 依 OSM 道路模擬車流。搭配 TomTom 後，8 公里內的即時車流速度與壅塞顏色改為真實資料驅動；個別車輛位置本身並非即時觀測值                                                                                                                                                                                                                       | TomTom + OSM                            | 🟢 模擬 · 🟡 即時車流速度                                                                 |
| 📹 **CCTV 網絡**            | 約 3,600 台公開攝影機投影進入 3D 空間——奧斯汀 · 德州（TxDOT） · 加州（Caltrans） · 倫敦（TfL） · 安大略（511） · 芬蘭（Fintraffic） · 卑詩省（DriveBC） · 愛沙尼亞（塔林、Tarktee） · 新南威爾斯（Live Traffic NSW） · 卡加利。位置為公開資料；姿態為估計初值，**可由你直接拖曳攝影機上的控制點來校正** | 城市 API                               | 🟢                                                                                                  |
| 📻 **電台**                | 具備 **類比調諧器** 的全球電台定位——拖曳指針即可在多達 750 個電台間切換，地球會飛向每個廣播來源                                                                                                                                                                                                                                                                 | Radio Browser / 各廣播電台            | 🟢                                                                                                  |
| 🚌 **大眾運輸**              | 即時公車、電車、地鐵、火車與渡輪，回報間隔以延遲播放呈現，並顯示所選車輛的軌跡與依模式上色的偵測標籤——波士頓、奧斯汀、明尼亞波利斯、赫爾辛基、荷蘭、挪威、東南昆士蘭                                                                                                                                                                                               | 各營運商的 GTFS-Realtime 資訊 | 🟢                                                                                                  |
| 🚲 **共享單車**            | 即時站點可用車輛數                                                                                                                                                                                                                                                                                                                                                           | GBFS                                    | 🟢                                                                                                  |
| 🧭 **路線導航**           | 在地球上點選 A、B 兩點，即可產生貼合地形的開車、步行或騎乘路線，並附逐步導航——接著讓鏡頭沿路線 **飛行**。免金鑰、免地理編碼服務、免麥克風                                                                                                                                                                                                                | OSRM，架設於 FOSSGIS 伺服器（OpenStreetMap） | 🟢                                                                                                  |
| 🔥 **活躍火點**         | 即時 NASA FIRMS 偵測資料，最近 24 小時                                                                                                                                                                                                                                                                                                                                            | NASA FIRMS                              | 🟡                                                                                                  |
| 🚀 **太空任務**       | 過去 30 天內滾動更新的發射任務，含酬載、火箭級數與回收細節                                                                                                                                                                                                                                                                                                             | Launch Library 2                        | 🟢（🟡 可選用 token 提高額度）                                                         |
| 🎖️ **標記設施** | 依社群標記資料呈現的視窗範圍軍事設施脈絡——本質上就不完整，且已明確標示此限制                                                                                                                                                                                                                                                              | OpenStreetMap                           | 🟢                                                                                                  |

**底圖等級——每一階可以買到什麼：**

| 你擁有的            | 你會得到的地球畫面                                                                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢 什麼都沒有                 | Esri 世界影像衛星底圖 + 免金鑰地形，2D 模式。若 Esri 無法連線會自動改用 OSM；若地形資料無法取得，地球仍會繼續運作，只是沒有地形 |
| 🟡 免費的 Cesium ion token | **Google 擬真 3D 城市** 與世界地形——適用符合資格的個人非商業用途；實際情況依當前 ion 條款與額度而定                                            |
| 🔴 Google Maps 金鑰       | 直連 Google 提供的同一套 3D，加上應用程式內建地點搜尋——屬於計費啟用的計費路線                                                                                                |

![A reconstructed Falcon 9 ascent climbing and curving into its projected orbit](docs/media/08-falcon9-replay.gif)

_太空任務圖層重現 Falcon 9 升空過程——標示為 `RECONSTRUCTED ESTIMATE`（重建估計值），可用 0.25×–4× 倍速拖曳播放。_

**地球上還有：** 街區疊層 · 座艙選用的 WX 雲層效果。**內建的靜態基礎設施資料：** 資料中心（4,351 個）、水壩（704 座）與海底電纜（712 條）。

![Diving into the Bahamas and revealing labeled submarine cable routes beneath the globe](docs/media/09-undersea-cables.gif)

**少了你想要的圖層？** 開一個 issue——或直接動手加上去、送出 PR。

---

## 🎖️ 實戰任務

熟悉基本操作後，可以試試以下這些：

| 任務                             | 玩法                                                                                                                                                                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🚁 問問這顆星球**               | _「為什麼這些軍用直升機都在繞圈飛？」_ 選取一條軍事航跡——它會默默回填約 24 小時的真實軌跡歷史——看看它究竟在做什麼，並以堆疊式 3D 迴圈重建呈現。   |
| **✈️ 最終進場**               | 點擊追蹤一架正在對準跑道的客機，切換到 **座艙視角**，跟著它一路降落。                                                                                                               |
| **🌃 夜間巡邏**                  | 飛到你自己的城市，切換到 **夜視鏡**，讓偵測網格與 HUD 自動解讀畫面。                                                                                                               |
| **🚢 靠港紀錄**                    | 開啟長灘港上方的船艦圖層。點擊一艘油輪查看戰術卡片與尾流軌跡——接著在 CCTV 面板按下 **最近**，透過公開攝影機看同一片水域。                  |
| **📻 東京 FM**                     | 開啟 **電台** 圖層，環繞澀谷——接著拖曳類比調諧器的指針：每個位置都會對應到一個真實電台，地球會飛向正在廣播的那個地方。                                      |
| **🔥 火線追蹤**                    | 在加州開啟 FIRMS 圖層。點擊一個偵測點——鏡頭會俯衝過去——查看強度數值，再於 CCTV 面板按下 **最近**，取得地面視角。                                         |
| **🚶 語音要求一條步行路線** _🎙️_ | 告訴這個世界你想去哪裡，看著一條貼合街道的路線在 3D 城市中自動描繪出來——接著說 _「飛這條路線」_：傾斜轉彎、平滑起訖，鏡頭像空拍機一樣領著路線飛行。 |
| **📏 量測 LAX 到 DFW 的距離** _🎙️_      | _「LAX 離 DFW 有多遠？」_——一支箭頭橫跨整個國家，距離會顯示在說明文字中，即使你環繞鏡頭，兩端點依然精準釘在真實世界的位置上。                                               |
| **🚀 發射任務重播**                | 開啟 **太空任務**，挑選過去 30 天內的一次發射，跟著倒數計時從升空一路飛到入軌——可用 0.25×–4× 倍速拖曳播放。標示為 `RECONSTRUCTED ESTIMATE`，因為它本來就是重建的估計值。         |
| **🪦 走一趟退役機場**            | 從區域視角一路飛進大量、完整重建的退役飛機停放區。                                                                                                                                       |
| **🏗️ 環繞三峽大壩**           | 一眼掃過大壩及其周邊地形——接著打開 **水壩** 圖層，再找出另外 703 座。                                                                                                           |

_🎙️ = 需要語音的任務——需要一組 OpenAI 金鑰。_

![Resolving a selected aircraft's recent flight path into stacked 3D loops above the terrain](docs/media/07-helicopter-loops.gif)

_問問這顆星球：一條軍事航跡最近約 24 小時的真實軌跡歷史，重建為堆疊式 3D 迴圈。_

![Asking for a walking route and flying the generated path through the 3D city](docs/media/10-walking-route-flythrough.gif)

_「畫一條步行路線……現在飛這條路線」——傾斜轉彎、平滑起訖，鏡頭像空拍機一樣領著路線飛行。_

![Descending from regional context into dense rows of retired aircraft at the boneyard](docs/media/08-boneyard.gif)

_走一趟退役機場：一排排完整重建的退役機身，全部以 3D 呈現。_

---

## 🔧 底層架構

地球如何處理即時資料：

- **世界座標穩定的圖示。** 飛機與船艦在任何鏡頭角度下——不論是否被追蹤、俯視或平視——都會朝著它們**真實的世界航向**顯示，透過逐幀螢幕空間航向投影達成。不會旋轉錯亂，也不會被鎖死在畫面座標上。
- **從斷續資料中產生平滑動態。** 即時資料每 15–30 秒抵達一次；地球會以落後真實時間一個區間的方式演算，並在已知定位點之間插值。航位推算負責補上中間的空白。
- **誠實的衛星軌跡。** 使用 SGP4 軌道模型，並透過 GMST 重新對齊讓軌道環持續鎖定其衛星——不會飄移，也不會每秒閃爍。
- **貼合真實地面。** 物件高度經過對齊以配合 Google 3D 圖磚，因此飛機會停在停機坪上、攝影機會立在街角，而不是浮空。
- **快取與請求額度控管。** OpenSky 額度控管、TomTom 每日圖磚額度，以及磁碟快取的 TLE 軌道根數，都能降低重複請求。這些機制不能取代供應商本身的額度或計費控管。
- **伺服器端憑證。** 任何會用到私密金鑰的 API（OpenAI、AISStream、OpenSky OAuth、攝影機影格）都會透過強化過的伺服器端代理轉發，具備 SSRF 防護、回應大小上限與錯誤訊息清理。瀏覽器唯一看得到的金鑰只有 Google Maps 與 Cesium ion（兩者都務必在供應商後台設定限制）。
- **無框架。** 純 JavaScript、**CesiumJS** 與 **Vite**——另外用 **Google 擬真 3D Tiles** 呈現地球本體，用 **OpenAI Realtime API** 提供語音功能。程式碼易讀、易上手修改。

```
src/
├── main.js                 # 啟動流程：Google 3D 圖磚、圖層註冊
├── ui.js                   # 執行期 UI——面板、HUD、風格、控制介面
├── hud.js                  # 情報 HUD + AI 場景摘要
├── keySetup.js             # POWER UP 面板——應用程式內建供應商金鑰設定（僅限開發伺服器）
├── mapStackController.js   # 底圖切換——Google 3D / Esri / OSM / ion 圖層堆疊
├── voice/                  # OpenAI Realtime 連線 + 28 種語音工具
├── data/                   # 每個圖層各自一個模組 + 協調邏輯 + 情資狀態存放
│   ├── iconOrientation.js  # 螢幕空間投影航向 + 地平線裁切
│   └── local_data/         # 內建資料集（各資料夾各自附有來源說明）
└── scenes/                 # 電影感場景導演
```

正式的執行期參考文件請見 [`docs/CURRENT-STATE.md`](docs/CURRENT-STATE.md)。

---

## 🔑 API 金鑰

🟢 **免金鑰** · 🟡 **免費金鑰** · 🔴 **計費制**

到 **POWER UP → Provider Settings** 新增金鑰。下方表格說明每個供應商能開通的功能；一開始使用時都不是必要條件。儲存與設定的細節請見 [設定說明](#接著再開通更多功能在應用程式裡設定不需要編輯檔案)。

### 挑選你想要的功能

六組金鑰。其中四組有免費額度，另外兩組 🔴 屬於計費制：

|     | 金鑰             | 用途                                                                                                                                                                                  | 取得方式                                                                                                                                                               |
| --- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟡  | **Cesium ion**  | 🗺️ Google 擬真 3D、世界地形，以及其他 ion 代管的地圖圖層。免費的 Community 方案適用符合資格的個人非商業用途，並設有額度上限 | [cesium.com/ion](https://cesium.com/ion) — 使用公開的 `assets:read` token，並確認目前的[定價與資格條件](https://cesium.com/platform/cesium-ion/pricing/) |
| 🔴  | **Google Maps** | 直連 Google 擬真 3D + Google 地點搜尋（[Map Tiles API](https://developers.google.com/maps/documentation/tile)）                                                                       | [Google Cloud Console](https://console.cloud.google.com/) — 記得設定網址限制                                                                                          |
| 🔴  | **OpenAI**      | 🎙️ 語音互動體驗 + AI HUD 摘要。mini 模型可以正常使用；標準模型明顯更聰明。想串接 Gemini 或其他供應商當作語音後端？歡迎送 PR                | [platform.openai.com](https://platform.openai.com) — 計費制，費用說明見下方                                                                                        |
| 🟡  | **AISStream**   | 🚢 全球即時船艦動態                                                                                                                                                                | [aisstream.io](https://aisstream.io) — 免費註冊                                                                                                                   |
| 🟡  | **NASA FIRMS**  | 🔥 即時活躍火點                                                                                                                                                                | [firms.modaps.eosdis.nasa.gov](https://firms.modaps.eosdis.nasa.gov/api/map_key/) — 免費                                                                             |
| 🟡  | **TomTom**      | 🚦 為模擬路況圖層提供即時車流速度與壅塞顏色                                                                                                            | [developer.tomtom.com](https://developer.tomtom.com) — 提供免費方案                                                                                           |

![Diving from city-scale live congestion straight into an intersection's public camera](docs/media/05-traffic-to-cctv.gif)

_TomTom 金鑰能買到什麼：整座城市即時呈現的尖峰時段壅塞熱度——接著從壅塞路段直接俯衝進入正在看著它的公開攝影機。_

### 錦上添花

|     | 金鑰                  | 用途                                                           | 取得方式                                             |
| --- | -------------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| 🟡  | **OpenSky**          | ✈️ 更多飛航資料查詢額度（🟢 匿名模式亦可運作）   | [opensky-network.org](https://opensky-network.org) |
| 🟡  | **Launch Library 2** | 🚀 更高的太空任務查詢額度（🟢 不設定亦可運作） | [thespacedevs.com](https://thespacedevs.com)       |

如果需要更高的查詢額度，可以加上這些金鑰。

`npm run doctor` 會回報 Node／npm 是否就緒、主要的供應商連線路徑，以及每個已設定供應商的來源，且不會印出實際的憑證數值。在 macOS 上，具備 Keychain 感知能力的檢查結果會預覽 `./scripts/dev-fresh.sh` 的行為；單純執行 `npm run dev` 則只會讀取明確的環境變數與 Vite 的 dotenv 數值。OpenSky 的檢查結果只會回報 OAuth 用戶端資料是否存在，不會顯示實際生效的執行模式或憑證是否有效；Basic 認證與憑證檔案模式，屬於進階的 `dev-fresh.sh` 設定範圍。

<details>
<summary>進階設定：環境變數與 macOS Keychain</summary>

適用於無圖形介面的機器、程式碼代理，或自動化腳本設定：

```bash
# 把金鑰放進 .env（可參考 .env.example），或直接以環境變數傳入：
OPENAI_API_KEY="…" AISSTREAM_API_KEY="…" npm run dev -- --host localhost --port 4173

# 在 macOS 上，也可以把金鑰存進 Keychain，dev-fresh.sh 會自動讀取：
security add-generic-password -U -s "google-maps-api" -a "api-key" -w
security add-generic-password -U -s "openai-api"      -a "api-key" -w
security add-generic-password -U -s "aisstream-api"   -a "api-key" -w
security add-generic-password -U -s "firms-map"       -a "map-key" -w
security add-generic-password -U -s "cesium-ion"      -a "token"   -w
```

OpenSky 可以完全以匿名模式執行（`OPENSKY_AUTH_MODE=anon`），也可以用 `./scripts/opensky-import-client.sh /path/to/credentials.json` 匯入 OAuth 憑證。

</details>

### 💸 實際費用大概多少

以下是誠實的粗估數字，以 2026 年中為準——請務必自行查閱供應商目前的定價頁面：

|                          | 實際費用狀況                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🟢 大多數圖層**       | **完全免費，不需註冊。** OpenSky 匿名模式、USGS、CelesTrak、adsb.lol、各城市 CCTV、Radio Browser、GBFS、Launch Library 2，以及內建資料集。                                                                                                                                                                                                                                             |
| **🟡 免費金鑰等級** | **註冊後即可免費使用。** AISStream、FIRMS、TomTom、OpenSky，以及符合資格個人非商業用途的 Cesium ion。仍受供應商額度與資格條件限制。                                                                                                                                                                                                             |
| **🗺️ Google 3D 圖磚**   | **透過符合資格、額度內的 Cesium ion Community 帳號可免費使用；透過直連 Google 金鑰則為計費制。** 若需要 GEV 的地點搜尋功能或商業部署，請使用直連路線，並自行確認目前的供應商條款，在啟用計費的情況下設定預算警示。                                                                                                                                                                         |
| **🔴 OpenAI 語音**      | **這是唯一真的會花到錢的項目——所以應用程式會幫你自動控管額度。** 即時語音每分鐘使用約幾美分；一整晚重度使用大約落在個位數美元。麥克風旁邊就有即時的本次連線花費顯示，並附上 STD／MINI 模型切換選項、2 美元的警告門檻，以及會直接**結束連線的 5 美元硬上限**。語音的對話上下文長度也刻意保持精簡。 |

Google 的直連 3D 路線其實相當大方：每個月前 1,000 次擬真 3D Tiles 連線目前是免費的，且單一根請求可支撐約三小時的畫面演算。一般個人輕度使用，現實上很有機會完全落在免費額度之內。仍須先啟用計費功能，因此請務必設定金鑰限制，並加上額度或預算警示。實際依賴這些數字之前，請先查閱 Google [目前的定價頁面](https://developers.google.com/maps/billing-and-pricing/pricing)。

### 🧗 入門門檻刻意壓得很低

以上所有內容，都是刻意壓低的免費／低價基準線——足以讓你真正體驗地理空間情報（GEOINT）與公開來源情報（OSINT）的滋味，完全不需要跟業務對話。你同時也會發現它的天花板：陸基 AIS 到了遠洋就會斷訊，衛星 AIS 是要花真錢的；高階影像、SAR，以及更深層的商用資料來源，都藏在企業合約背後。但這不是架構本身的限制——這裡的每一個圖層，都是一個你可以套用到自己資料來源上的範例模式。這個 repo 提供的是基礎建設；接下來要融合進哪些資料，由你決定。

### 🔒 分享一個執行中的服務

預設情況下，沒有其他人能連到你的伺服器——它只綁定在 localhost。若要在區網內分享，需要明確選擇開啟（`npm run dev -- --host 0.0.0.0 --port 4173`，或在 macOS／Linux 上使用 `HOST=0.0.0.0 ./scripts/dev-fresh.sh`）——但請注意：⚠️ **一旦伺服器對區網可見，任何連得到它的人都能透過它使用你設定的 API 金鑰。** 請設定各 IP 的速率限制（`GEV_RATELIMIT_OPENAI_PER_MIN`、`GEV_RATELIMIT_GOOGLE_PER_MIN`——見 `.env.example`），並且在做任何事之前，**先設定好供應商的額度、使用上限與計費警示**：應用程式層級的速率限制不等於計費上限，光靠預算警示也無法真的阻止繼續產生費用。完整的威脅模型請見 [SECURITY.md](SECURITY.md)。

當伺服器處於分享模式時，Provider Settings 會被停用，因此遠端使用者無法存取金鑰輸入面板。

**這個啟動器目前停用 Pinokio 的區網與 Cloudflare 分享功能。** 若確實需要遠端存取，請使用另外經過審查的身分驗證代理伺服器。[SECURITY.md](SECURITY.md) 說明了相關限制與威脅模型。

---

## 📋 負責任且開放

God's Eye View 建立在**公開資料、來源清楚、且以本機優先執行**的基礎上。沒有機密資料、沒有私有資料集、沒有來路不明的爬蟲行為——任何涉及私密金鑰的動作，都會經由伺服器端轉發。它擁有機密作戰室般的視覺語言，卻完全建構自公開訊號與可檢視的程式碼。

**這條界線。** 這個專案處理的是**事件、資產、基礎設施與系統**——飛機、船艦、衛星、火點、攝影機、城市。它不會為「指名搜尋特定人物」「人臉辨識」或「追蹤個人」等功能提供任何實作，跨越這條界線的 pull request 也不會被合併。在這裡，人不是一種可查詢的資料類型。

**歡迎加入建構。** 這是引發近期這波空間情報（spatial-intelligence）工具浪潮的專案，其正統的即時 3D 用戶端——同時它也是一塊畫布：這裡的每個圖層，都是一個人靠自己找到並整合起來的訊號。歡迎加入一個城市資料包、一個資料來源、一種風格、一個語音工具。它是你觀看這個世界的窗口；把這扇窗也帶給更多人。

**目前狀態：** 一個持續演進中的開源用戶端，用於探索與學習——它是一個快速、易於修改的基礎，而不是經過強化的正式營運服務。以 **[MIT 授權條款](LICENSE)** 釋出。內建與即時資料集各自受其自身條款規範——詳見 **[DATA_SOURCES.md](DATA_SOURCES.md)**。安全性模型見 **[SECURITY.md](SECURITY.md)**。想貢獻程式碼？見 **[CONTRIBUTING.md](CONTRIBUTING.md)**。

**維護者：** [Bilawal Sidhu](https://github.com/bilawalsidhu) 與 [Sameh Khamis](https://github.com/samehkhamis)，任職於 [Halfpixel](https://halfpixel.ai)。

<sub>媒體說明：本頁面的擷取 GIF 展示了 Google 擬真 3D Tiles 與即時資料圖層，屬於附帶畫面內來源標示的宣傳用途；並未授權作為獨立素材重複使用。詳見[媒體來源與授權說明](docs/media/README.md)；完整的資料來源條款請見 [DATA_SOURCES.md](DATA_SOURCES.md)。</sub>

> [!IMPORTANT]
> God's Eye View 是一個針對公開與第三方資料的探索性視覺化工具。
> 資料可能延遲、不完整、經過建模、推論而來，或甚至有誤。請勿將其用於
> 飛航或海事導航、緊急應變、醫療或健康決策、投資決策，或其他
> 安全攸關或營運性用途。重要資訊請務必以權威來源進行查證。

---

## 🧭 接下來

首先——謝謝大家。感謝每一位看過 God-view 系列展示、進而動手打造自己作品的人，也感謝每一位不斷詢問原始碼何時釋出的人：我由衷感激。當我做問卷調查、詢問是否該把這個專案開源時，大家的反應一點也不含蓄：

<img src="docs/media/open-source-survey.png" alt="Community survey on open-sourcing God's Eye View" width="460">

於是就有了現在這個版本。歡迎走進這個間諜驚悚片般的座艙——只是這一次資料是真的——讓我們一起把它變成理解這個世界的共享沙盒，並且好好享受這個過程。這個 repo 就是基準線，它會持續保持開放，而整件事的重點，就是讓你動手把它玩壞、接上我們還沒想到的圖層。

一個內部心得分享：在這個領域投入一週，你就會學到**「現在」才是便宜的部分**。一旦你試著回到過去——在任何真正有意義的解析度下，去 tiling、serving、拖動比對「發生過什麼」與「有什麼改變」——資料成本會急遽上升，運算開銷也會變得非常沉重。那才是真正的長期戰場。

**最新消息——代管版本即將推出。** 我們原本計畫把這個 repo 維持為開源用戶端，另外打造一個獨立的專業產品。但專案爆紅之後，最常聽到的請求並不是「再加一個功能」，而是——「直接給我一個連結就好」。所以我們正在 [Halfpixel](https://halfpixel.ai) 打造官方代管版的 God's Eye View：不需要安裝，直接在瀏覽器打開即可。代管版將是進入這個開源專案最簡單的方式。更多細節之後公布。

---

<div align="center">

▶️ [觀看 God's Eye View 系列影片](https://youtube.com/playlist?list=PL6qSg2I-7_koPbDnSMo0QeeHX_RknA2uv&si=nBGYMoHWQw41v93Q) · 📬 [Map the World](https://maptheworld.ai/) — 本專案背後的電子報

**🌐 God's Eye View。天羅地網，無所遁形。**

</div>

---

<sub>本文件為社群提供的繁體中文翻譯，內容以 [README.md](README.md) 英文原版為準；如有出入，請以英文版為準。</sub>
