npm run docs:build

git add .
git commit 

# 提交到 master 分支
git push -f 

# 提交相应目录下内容到对应分支
git subtree push -f --prefix docs/.vuepress/dist origin gh-pages

git subtree push -f --prefix notes-code origin notes-code