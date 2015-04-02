# Clearup (iPhoto)

iPhotoのオリジナル画像の抽出/整理を行います。

## 使い方

    npm install
    node scripts/{commandFileName}.js

## 設定

設定ファイルは `scripts/config.js` になります。  
iPhoto Library の場所を `config.iPhotoLibraryDir` で指定して、その他の設定は適宜変更してください。

## コマンド

### オリジナルデータのコピー

#### オリジナルファイル一覧を取得

    node scripts/initialize.js

一番はじめに利用するコマンドです。  
iPhotoのオリジナルファイルすべてを取得して作業ディレクトリにコピーします。  
同名のファイルには連番が振られ、`images/` 以下に保存されます。  
作業ディレクトリの変更は `scripts/settings.js` の `config.imageDir` プロパティを変更してください。

### 作業ディレクトリ内のファイル更新

#### 日付ファイル名の作成日修正

    node scripts/fix-filedate.js

`2012-10-07 18.10.28.{ext}`, `20121007_181028.{ext}` のファイル名から日時を取得して、ファイルの作成日を変更します。

### 一時ディレクトリに移動

#### サムネイル画像の抽出

    node scripts/get-thumbnails.js

`横幅 360px または 高さ 360px`, `thumb_*` のJPGファイルを `temp/` 以下に移動します。  
重複していて不要だと思われる画像を削除をしてください。  
**前者は画像サイズのみで抽出していますので、本来必要なファイルが多く移動される場合があります。**

#### 同一ファイルサイズの画像抽出

    node scripts/get-same-filesize.js

同一ファイルサイズの画像 (作成日が遅いもの) を`temp/` 以下に移動します。
