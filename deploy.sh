npm run docs:build

# 提交到 master 分支
git add .
git commit -m 'update - new content'
git push -f origin master

# 提交相应目录下内容到对应分支
git subtree push -f --prefix=docs/.vuepress/dist origin gh-pages

git subtree push -f --prefix=notes_code origin notes-code