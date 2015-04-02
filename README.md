# Clearup (iPhoto)

iPhotoのオリジナル画像の抽出/整理を行います。

## 使い方

    npm install
    node scripts/{commandFileName}.js

## コマンド

### オリジナルファイル一覧を取得

    node scripts/get_original_files.js

iPhotoのオリジナルファイルすべてを取得します。
同名のファイルには連番が振られ、`images/` 以下に保存されます。
保存ディレクトリの変更は `scripts/settings.js` の `imageDir` プロパティを変更してください。

### 日付ファイル名の作成日修正

    node scripts/fix_datefile.js

`2012-10-07 18.10.28.{ext}`, `20121007_181028.{ext}` のファイル名から日時を取得して、作成日にします。