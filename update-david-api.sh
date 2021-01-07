cd `dirname $0`

# 削除する。
rm -f -r ./pack/david-david-api-1.0.0.tgz

# コピーする。
cp ../david-client-api/src/dist/david-david-api-1.0.0.tgz ./pack

# インストールする。
npm install ./pack/david-david-api-1.0.0.tgz
