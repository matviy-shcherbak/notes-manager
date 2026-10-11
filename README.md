# NoteNest — Менеджер нотаток із категоріями та пошуком

Навчальна практика з програмування (Частина 3).  
**Виконав:** здобувач освіти групи КН-33 Щербак Матвій Ігорович.

## Опис проєкту
Клієнтська частина SPA-застосунку з компонентною архітектурою на React, модульною SCSS-стилізацією, патерном Dependency Injection (DI) через Service Container та інтеграцією з REST API сервера.

## Технологічний стек
- **Front-end:** React 18, Vite, SCSS, Axios
- **Архітектура:** Component Architecture, Dependency Injection (React Context), Presentational/Container pattern
- **Браузерні API:** `localStorage` (збереження темної/світлої теми та чернеток форми)
- **Back-end:** Node.js, Express, REST API (CRUD, Swagger/OpenAPI)

## Структура репозиторію
- `/client` — фронтенд застосунок (компоненти, стилі SCSS, DI-контейнер)
- `/server` — REST API сервер та специфікація Swagger

## Інструкція із запуску

### 1. Серверна частина (Back-end)
```bash
cd server
npm install
node server.js
