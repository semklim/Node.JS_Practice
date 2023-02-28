
![Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png)


# What is this repo?

This task is from the STEP Academy.
Practice working with node.js
## Features 
The following scripts are implemented:
- Reads the text from the file and for each word creates a separate file in the "fs_test_directory" folder. The task required the synchronous method.
- Removes all files from the folder "fs_test_directory" except files with the extension .html.
- Adds a random number to each file in the "fs_test_directory" folder.
- You can get a list of files that are in the folder. The path to the folder is passed as a parameter from the "package.json" file.

## Run Locally

Download and install [![nodejs](https://img.shields.io/badge/node.js-000?style=for-the-badge&logo=nodedotjs&logoColor=green)](https://nodejs.org/en/)

Clone the project

```bash
  git clone https://github.com/semklim/Node.JS_Practice.git
```

Go to the project directory

You can start next scripte:
1) Reads the text from the file and for each word creates a separate file in the "fs_test_directory" folder. The task required the synchronous method.

```bash
  npm run create
```
2) Delete all files from the folder "fs_test_directory" except files with the extension .html.

```bash
  npm run delete
```
3) Adds a random number to each file in the "fs_test_directory" folder.

```bash
  npm run append
```
4) You can get a list of files that are in the folder. The path to the folder is passed as a parameter from the "package.json" file.

```bash
  npm run getDir
```
## Details of work

Each solution must be launched through a script (for each task - its own script to run)

0. Create a folder "fs_test_directory" in the root of the project, all tasks are performed in it.
upload a .html file with any content and any picture into it in advance


1. A script that creates 50 files in the project (in a separate folder), each file contains 1 word from any verse (you can take a verse for ~ 20 words and have the words repeat).
When ready, prints 'files created' to the console.
Execute via synchronous fs methods


2. Script deleting all files in the folder (except html), after deletion it outputs to the console - 'remove done' (if there are no files in the folder - it displays 'directory already clear')
Execute via asynchronous fs methods on callbacks


3. The script for adding a random number to each file in the folder (only in .txt), outputs 'append done' to the console when ready.
Execute via asynchronous fs methods on promises

4. Script to display the contents of the directory - when running the script, we can pass the parameter as a path. If there is no path, displays "path is required"
## Детали работы

Каждое решение должно запускаться через скрипт(под каждое задание - свой скрипт для запуска)

0. Создайте в корне проекта - папку "fs_test_directory", все задания выполняются в ней.
закиньте заранее в нее .html файл с любым содержимым и любую картинку


1. Скрипт создающий в проекте (в отдельной папке) 50 файлов, в каждом файле по 1 слову из любого стиха(можно взять стих на ~20 слов и чтобы слова повторялись). 
По готовности - выдает в консоль 'files created'.
Выполнить через синхронные методы fs


2. Скрипт удаление всех файлов в папке(кроме html), по удалению выдает в консоль - 'remove done' (если файлов в папке нет - выдает 'directory already clear')
Выполнить через асинхронные методы fs на callback-ах


3. Скрипт дозаписи рандомной цифры в каждый файл в папке(только в .txt), по готовности выдает в консоль 'append done'.
Выполнить через асинхронные методы fs на promise-ах

4. Скрипт для вывода содержимого директории - при запуске скрипта  мы можем передать параметр в виде путя. Если путя нет - выводит "path is required" 