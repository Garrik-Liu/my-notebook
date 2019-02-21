npm run docs:build

git add .
git commit 

# 提交到 master 分支
git push -f origin master

# 提交相应目录下内容到对应分支
git subtree push --prefix docs/.vuepress/dist origin gh-pages

git subtree push --prefix notes_code origin notes_code