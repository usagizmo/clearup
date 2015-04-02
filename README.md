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

    node scripts/get_original_files.js

一番はじめに利用するコマンドです。  
iPhotoのオリジナルファイルすべてを取得して作業ディレクトリにコピーします。  
同名のファイルには連番が振られ、`images/` 以下に保存されます。  
作業ディレクトリの変更は `scripts/settings.js` の `config.imageDir` プロパティを変更してください。

### 作業ディレクトリ内のファイル更新

#### 日付ファイル名の作成日修正

    node scripts/fix_datefile.js

`2012-10-07 18.10.28.{ext}`, `20121007_181028.{ext}` のファイル名から日時を取得して、ファイルの作成日を変更します。

### 一時ディレクトリに移動

#### サムネイル画像の抽出

    node scripts/get_thumbnails.js

`270 x 360`, `360 x 270`, `thumb_*` のJPGファイルを `temp/` 以下に移動します。  
重複していて不要だと思われる画像を削除をしてください。  
**画像サイズのみで抽出していますので、本来必要なファイルが移動される場合があります。**
