npm run docs:build

git add *
git commit -m "update"
git push

# 删除 ph-pages 分支，以防冲突。每次提交都是暴力覆盖
git branch -d origin/ph-pages

git branch -d origin/notes-code

# 提交到远程
git subtree push --prefix docs/.vuepress/dist origin gh-pages

git subtree push --prefix notes-code origin notes-code