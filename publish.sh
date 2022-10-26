# 使用命令行工具执行 1.✅ 修改执行权限 chmod +x publish.sh  2.✅ ./publish.sh

# npm config get registry
# npm config set registry=https://registry.npmjs.org
echo '请进行登录相关操作：'
npm login # 登陆
echo "-------publishing-------"
npm publish --access=public # 发布
# npm config set registry=https://registry.npm.taobao.org
echo "发布完成"
exit