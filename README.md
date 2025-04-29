# React App Template (Feature-Sliced + Vite + TypeScript)

## Установка

```bash
npm install
```

## Запуск разработки

```bash
npm run dev
```

## Переменные окружения

Создай `.env` на основе `.env.example`:

```
VITE_API_URL=https://api.example.com
VITE_ENV=development
```

## Структура проекта (Feature-Sliced Design)

```
src/
├── app/         # Инициализация приложения (App, провайдеры)
├── shared/      # Утилиты, общие компоненты, конфиги
├── entities/    # Бизнес-сущности (User, Post и т.д.)
├── features/    # Фичи с юзер-ценностью
├── widgets/     # Компоненты-интерфейсы, объединяющие фичи
├── pages/       # Страницы
├── processes/   # Бизнес-процессы
```
