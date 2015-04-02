# Clearup (iPhoto)

iPhotoのオリジナル画像の抽出/整理を行います。

## 使い方

    npm install
    node scripts/{commandFileName}.js

## コマンド

オリジナルファイル一覧を取得

    node scripts/get_original_files.js

初期設定では `images/` 以下に保存されます。
保存ディレクトリの変更は `scripts/settings.js` の `imageDir` プロパティを変更してください。
