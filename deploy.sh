
set -e

npm run build

cd dist

echo > .nojekyll

echo 'http://www.jaedynkeister.com' > CNAME

git init
git checkout -B main
git add -add
git commit -m 'deploy'

cd - 