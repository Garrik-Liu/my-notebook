npm run docs:build

git add *
git commit -m "update"
git push

git subtree push -f --prefix docs/.vuepress/dist origin gh-pages