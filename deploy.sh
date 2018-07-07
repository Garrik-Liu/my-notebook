npm run docs:build

git add *
git commit -m "update"
git push

git subtree push --prefix docs/.vuepress/dist origin gh-pages