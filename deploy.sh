cd `dirname $0`

# ビルドする。
ng build --prod --output-path ../david/docs --base-href /david/

# routerのために、404.htmlを作成する。
cp ../david/docs/index.html ../david/docs/404.html

cd ../david

# commit/pushして、GitHub Pagesにデプロイする。
git add .
git commit -m "デプロイする。"
git push origin master
