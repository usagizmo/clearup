# Clearup (iPhoto)

iPhotoのオリジナル画像の抽出/整理を行います。

## インストール

    cd ~/Pictures/iPhoto Library.photolibrary
    git clone https://github.com/usagizmo/clearup.git
    cd clearup

## 使い方

    npm install
    node scripts/{command}

## コマンド

オリジナルファイル一覧を取得
初期設定では `images/` 以下に保存されます。
保存ディレクトリの変更は `scripts/settings.js` の `imageDir` プロパティを変更してください。

    node scripts/get_original_files.js
