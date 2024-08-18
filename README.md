Требования
Перед началом установки убедитесь, что на вашем компьютере установлены следующие инструменты:

Node.js
npm или Yarn
Следуйте этим шагам, чтобы установить и запустить проект локально:

1. Клонируйте репозиторий на ваш локальный компьютер:
   git clone https://github.com/Ignotik/test-task-INLINE.git

2. Установка зависимостей

npm install
или
yarn install 3. Запуск проекта
Для запуска WebPack:

npm run start
или
yarn start 4. Сборка проекта для продакшена
npm run build
или
yarn build
Собранные файлы будут находиться в папке dist или другой, указанной в конфигурации Webpack.
Структура проекта
Проект имеет следующую структуру:

test-task-INLINE/
│
├── dist/ # Скомпилированные файлы для продакшена
├── src/
│ ├── index.js
│ ├── styles.css
│ ├── images/
│ └── ... другие файлы
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
