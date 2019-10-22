## MongoDB  

MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。  
在高负载的情况下，添加更多的节点，可以保证服务器性能。  
MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。  
MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。  

## 主要特点  

MongoDB 是一个面向文档存储的数据库，操作起来比较简单和容易。  
你可以在MongoDB记录中设置任何属性的索引 (如：FirstName="Sameer",Address="8 Gandhi Road")来实现更快的排序。  
你可以通过本地或者网络创建数据镜像，这使得MongoDB有更强的扩展性。  
如果负载的增加（需要更多的存储空间和更强的处理能力） ，它可以分布在计算机网络中的其他节点上这就是所谓的分片。  
Mongo支持丰富的查询表达式。查询指令使用JSON形式的标记，可轻易查询文档中内嵌的对象及数组。  
MongoDb 使用update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。  
Mongodb中的Map/reduce主要是用来对数据进行批量处理和聚合操作。  
Map和Reduce。Map函数调用emit(key,value)遍历集合中所有的记录，将key与value传给Reduce函数进行处理。  
Map函数和Reduce函数是使用Javascript编写的，并可以通过db.runCommand或mapreduce命令来执行MapReduce操作。  
GridFS是MongoDB中的一个内置功能，可以用于存放大量小文件。  
MongoDB允许在服务端执行脚本，可以用Javascript编写某个函数，直接在服务端执行，也可以把函数的定义存储在服务端，下次直接调用即可。  
MongoDB支持各种编程语言:RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。  
MongoDB安装简单。  

## Windows 平台安装 MongoDB  
MongoDB 提供了可用于 32 位和 64 位系统的预编译二进制包，你可以从MongoDB官网下载安装，MongoDB 预编译二进制包下载地址：https://www.mongodb.com/download-center#community  
注意：在 MongoDB 2.2 版本后已经不再支持 Windows XP 系统。最新版本也已经没有了 32 位系统的安装文件。  
下一步安装 "install mongoDB compass" 不勾选，否则可能要很长时间都一直在执行安装，MongoDB Compass 是一个图形界面管理工具，我们可以在后面自己到官网下载安装，下载地址：https://www.mongodb.com/download-center/compass。  
创建数据目录  
MongoDB将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。请注意，数据目录应该放在根目录下（(如： C:\ 或者 D:\ 等 )。  
在本教程中，我们已经在 C 盘安装了 mongodb，现在让我们创建一个 data 的目录然后在 data 目录里创建 db 目录。  

## 命令行下运行 MongoDB 服务器  
为了从命令提示符下运行 MongoDB 服务器，你必须从 MongoDB 目录的 bin 目录中执行 mongod.exe 文件。  
C:\mongodb\bin\mongod --dbpath c:\data\db  
如果执行成功，会输出如下信息：  
2015-09-25T15:54:09.212+0800 I CONTROL  Hotfix KB2731284 or later update is not  
installed, will zero-out data files  
2015-09-25T15:54:09.229+0800 I JOURNAL  [initandlisten] journal dir=c:\data\db\journal  
2015-09-25T15:54:09.237+0800 I JOURNAL  [initandlisten] recover : no journal files present, no recovery needed  
2015-09-25T15:54:09.290+0800 I JOURNAL  [durability] Durability thread started  
2015-09-25T15:54:09.294+0800 I CONTROL  [initandlisten] MongoDB starting : pid=2  
488 port=27017 dbpath=c:\data\db 64-bit host=WIN-1VONBJOCE88  
2015-09-25T15:54:09.296+0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2  
2015-09-25T15:54:09.298+0800 I CONTROL  [initandlisten] db version v3.0.6  

## 连接MongoDB
我们可以在命令窗口中运行 mongo.exe 命令即可连接上 MongoDB，执行如下命令：  
C:\mongodb\bin\mongo.exe  

## 配置 MongoDB 服务  
管理员模式打开命令行窗口  
创建目录，执行下面的语句来创建数据库和日志文件的目录  
mkdir c:\data\db  
mkdir c:\data\log  
### 创建配置文件  
创建一个配置文件。该文件必须设置 systemLog.path 参数，包括一些附加的配置选项更好。  
例如，创建一个配置文件位于 C:\mongodb\mongod.cfg，其中指定 systemLog.path 和 storage.dbPath。具体配置内容如下：  
systemLog:  
    destination: file  
    path: c:\data\log\mongod.log  
storage:  
    dbPath: c:\data\db  

## 安装 MongoDB服务
通过执行mongod.exe，使用--install选项来安装服务，使用--config选项来指定之前创建的配置文件。  
C:\mongodb\bin\mongod.exe --config "C:\mongodb\mongod.cfg" --install  

要使用备用 dbpath，可以在配置文件（例如：C:\mongodb\mongod.cfg）或命令行中通过 --dbpath 选项指定。  
如果需要，您可以安装 mongod.exe 或 mongos.exe 的多个实例的服务。只需要通过使用 --serviceName 和 --serviceDisplayName 指定不同的实例名。只有当存在足够的系统资源和系统的设计需要这么做。  

## 启动MongoDB服务  
net start MongoDB  

## 关闭MongoDB服务  
net stop MongoDB  

## 移除 MongoDB 服务  
C:\mongodb\bin\mongod.exe --remove  