// Конфигурация commitlint для контроля формата сообщений коммитов.
// Используется подход Conventional Commits: <type>(scope?): <subject>
// Примеры допустимых типов коммитов:
//   feat:     добавление нового функционала
//   fix:      исправление ошибок
//   docs:     изменения только в документации
//   style:    форматирование, не влияющее на логику (пробелы, отступы, запятые и т.д.)
//   refactor: изменения в коде без исправления багов и добавления функционала
//   perf:     улучшение производительности
//   test:     добавление или обновление тестов
//   chore:    изменения в сборке, зависимостях, настройках и т.п. (не код приложения)
//   ci:       изменения в CI-конфигурации (GitHub Actions, GitLab CI и т.п.)

// Дополнительно:
// - subject (тема) должна быть в нижнем регистре, без точки в конце
// - максимальная длина заголовка коммита — 72 символа

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'ci',
      ],
    ],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'header-max-length': [2, 'always', 72],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
};
