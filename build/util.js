"use strict";

const fs = require('fs');
const path = require('path');

//  获取基于当前路径的目标文件
const resolve = dir => path.join(__dirname, '../', dir);

const getComponentEntries = function (relativePath) {
  let files = fs.readdirSync(resolve(relativePath));

  const componentEntries = files.reduce((fileObj, item) => {
    //  文件路径
    const itemPath = path.join(relativePath, item);
    //  在文件夹中，需排除theme-chalk目录
    const isDir = fs.statSync(itemPath).isDirectory() && itemPath.indexOf('theme-chalk') === -1;
    const [name, suffix] = item.split('.');

    console.log("isDir: ", itemPath)

    //  文件中的入口文件
    if (isDir) {
      fileObj[item] = resolve(path.join(itemPath, 'index.js'));
    }
    //  文件夹外的入口文件
    else if (suffix === 'js') {
      fileObj[name] = resolve(`${itemPath}`);
    }
    return fileObj;
  }, {});

  return componentEntries;
}

module.exports = {
  getComponentEntries
}
