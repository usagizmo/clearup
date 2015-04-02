# Clearup (iPhoto)

iPhotoのオリジナル画像の抽出/整理を行います。

## 使い方

    npm install
    node scripts/{commandFileName}.js

## 設定

設定ファイルは `scripts/config.js` になります。  
iPhoto Library の場所を `config.iPhotoLibraryDir` で指定して、その他の設定は適宜変更してください。

## コマンド

### オリジナルファイル一覧を取得

    node scripts/get_original_files.js

iPhotoのオリジナルファイルすべてを取得します。  
同名のファイルには連番が振られ、`images/` 以下に保存されます。  
保存ディレクトリの変更は `scripts/settings.js` の `config.imageDir` プロパティを変更してください。

### 日付ファイル名の作成日修正

    node scripts/fix_datefile.js

`2012-10-07 18.10.28.{ext}`, `20121007_181028.{ext}` のファイル名から日時を取得して、作成日にします。

### サムネイル画像の抽出

    node scripts/get_thumbnails.js

270 x 360, 360 x 270 のJPGファイルを `temp/` 以下に移動します。  
重複していて不要だと思われる削除をしてください。  
**※画像サイズのみで抽出していますので、本来必要なファイルが移動される場合があります。**