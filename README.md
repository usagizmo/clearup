# Clearup (iPhoto)

iPhoto内のオリジナルの画像データをリポジトリ内の作業ディレクトリに移動させ、  
画像の条件抽出をコマンド（スクリプト）で行い、手動で整理しやすくします。

## 使い方

    npm install
    node scripts/{commandFileName}.js

## 設定

設定ファイルは `scripts/config.js` になります。  
iPhoto Library の場所を `config.iPhotoLibraryDir` で指定して、その他の設定は適宜変更してください。

|     config.      |                説明                |
| ---------------- | ---------------------------------- |
| iPhotoLibraryDir | iPhoto Libraly.photolibrary の場所 |
| masterDir        | Masters フォルダの場所             |
| appDir           | リポジトリルート                   |
| imageDir         | 作業ディレクトリ                   |
| tempDir          | 一時ディレクトリ                   |

## 各種コマンド

### オリジナルデータのコピー

#### オリジナルファイル一覧を取得

    node scripts/initialize.js

一番はじめに利用するコマンドです。  
iPhotoのオリジナルファイルすべてを取得して作業ディレクトリにコピーします。  
同名のファイルには連番が振られ、作業ディレクトリに保存されます。  
作業ディレクトリの変更は `scripts/settings.js` の `config.imageDir` プロパティを変更してください。

### 作業ディレクトリ内のファイル更新

#### 日付ファイル名の作成日修正

    node scripts/fix-filedate.js

`2012-10-07 18.10.28.{ext}`, `20121007_181028.{ext}` のフォーマットのファイル名から日時を取得して、ファイルの作成日を変更します。

### 一時ディレクトリに移動

#### サムネイル画像の抽出

    node scripts/get-thumbnails.js

`横幅 360px または 高さ 360px`, `thumb_*` のJPGファイルを一時ディレクトリに移動します。  
重複していて不要だと思われる画像を削除をしてください。  
**前者は画像サイズのみで抽出していますので、本来必要なファイルが多く移動される場合があります。**

#### 同一ファイルサイズの画像抽出

    node scripts/get-same-filesize.js

同一ファイルサイズの画像が存在する場合、作成日が遅いものを一時ディレクトリに移動します。
