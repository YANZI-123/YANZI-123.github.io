# Hexo个人博客搭建教程

## 软件准备

### nodejs

下载链接：https://nodejs.org/zh-cn/download

![](C:\Users\17364\Desktop\图片\屏幕截图 2025-07-30 135224.png)

选择windows安装



![](C:\Users\17364\Desktop\图片\屏幕截图 2025-07-30 135531.png)

安装选项说明：

安装过程一路下一步（next)

默认勾选了核心组件：Nodes.jsruntime(运行时)、corepack manager(包管理器)、npm(node包管理工具)和PATH环境变量

安装完成后 打开cmd 输入命令 node -v和验证安装

![](C:\Users\17364\Desktop\图片\3.png)
$$

$$
有以上界面为安装成功

## git

下载链接：https://git-scm.com/downloads

https://registry.npmmirror.com/binary.html?path=git-for-windows/

进来之后选择自己合适的版本即可，这里提供了两种类型的git：
独立安装程序（Standalone Installer）：32位和64位Git for Windows的安装程序。独立安装程序是一
种简便的方式，将Git for Windows直接安装到计算机上，使其成为系统的一部分。
便携版（Portable）：32位和64位Git for Windows的便携式版本，也被称为“存储在可移动设备上的版
本”。便携版可以在没有安装过程的情况下直接运行，非常适合携带在便携式存储设备（如USB闪存驱动
器）中使用，方便在不同计算机之间使用Git。
一般选择64位的安装包即可。

![](C:\Users\17364\Desktop\图片\4.png)

## hexo

打开cmd 输入命令

 npm install hexo-cli -g      #全局安装

再输入hexo -v

#1.**显示 Hexo 核心版本**：主程序版本号

2.**显示插件版本**：包括 hexo-cli、渲染引擎等关键组件

3.**环境检查**：快速确认安装是否成

![](C:\Users\17364\Desktop\图片\5.png)

## 本地博客部署

从github 克隆Hexo官方模板仓库

open git bash here

hexo init blog

![](C:\Users\17364\Desktop\图片\6.png)

打开bash窗口

![](C:\Users\17364\Desktop\图片\7.png)

输入命令

npm install

![](C:\Users\17364\Desktop\图片\8.png)此时本地博客已经搭建完成

![](C:\Users\17364\Desktop\图片\9.png)

可通过浏览器访问http://local:4000/得到以下界面

![](C:\Users\17364\Desktop\图片\10.png)

# 本地博客部署到云服务器

准备：

1.本地搭建完成的博客

2.一台云服务器

3.本地安装一个ssh连接工具（或者bash终端）



# 搭建仓库

1.注册或登录Github

2.点击Create a new repository 进入新仓库页面，创建一个新仓库

仓库名输入格式为：

用户名.github.io

勾选public

勾选Add a README file

点击create创建

## 生成ssh keys

进入任意文件夹，右键空白处然后点Git bash here,输入

ssh-keygen -t rsa -c "邮件地址"

然后进入C:\Users\用户名，在里面进入.ssh文件
用记事本打开里面的id_rsa.pub,全选复制里面的代码

![](C:\Users\17364\Desktop\图片\11.png)



然后打开github
进入用户设置，找到SSH keys
新建SSH keys，名称随意，在下面粘贴代码，
然后创建

![](C:\Users\17364\Desktop\图片\12.png)

测试是否成功

在github中输入

ssh  -T git@github.com

回车，输入yes

![](C:\Users\17364\Desktop\图片\13.png)



## 上线博客

进入之前的Blog文件夹，用记事本打开_config.yml
拉到最下面将deploy后面的全删掉，复制粘贴这段

type: git
repository:
branch: main

###注意缩进格式：每行前面都有两个空格不要删，每个冒号后面都有个空格也不要删！

去github之前生成的仓库页面，点code，复制https链接
将其粘贴到我们记事本中的 repository： 后面
然后保存退出
回到博客文件夹，git bash
安装自动部署发布工具

npm install hexo-deployer-git --save

![](C:\Users\17364\Desktop\图片\14.png)

然后在Blog文件夹右键打开git bash，依次输入

然后在Blog文件夹右键打开git bash，依次输入

如果是第一次使用git的话会需要配置

git config --global user.email "你的邮箱"
git config --global user.name "你的名字"

配置完后再 hexo d 上传
在跳出来的窗口内进行登录

![](C:\Users\17364\Desktop\图片\15.png)

接下来我们就成功把本地内容上传到github了
上传成功以后，我们就算搭建好了！上自己的网址看看吧
网址是我们之前设的仓库名：用户名.github.io

## 发布文章

hexo new “文章名” 

找到文章路径 

修改标题、日期、标签（标签前要加一个空格，否则会报错！）

![](C:\Users\17364\Desktop\图片\16.png)
