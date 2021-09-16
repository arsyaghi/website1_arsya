# todo-apps

## Tech Stack

Berikut adalah teknologi yang digunakan :

| No  | Nama       | Fungsi                                 |
| --- | ---------- | -------------------------------------- |
| 1   | Expres.jss | Membuat server back end                |
| 2   | Postgres   | DBMS yang diunakan                     |
| 3   | Sequelize  | ORM untuk membantu CRUD db             |
| 4   | EJS        | Template Engine untuk tampil d browser |
| 5   | Bootstrap  | CSS Frameworks                         |

## Summary

Todo Apps adalah aplikasi todo list yang memiliki fitur :

- Show task
- Create task
- Delete Task
- Edit Task

Install package - package terlebih dahulu

1. Setting

   ```powershell
   npm init -y
   ```

2. installing packages

   ```bash
   npm install express pg sequelize

   npm install nodemon sequelize-cli --save-dev
   ```

## Tasks

### task 1 : Membuat database

Buatlah database menggunakan _sequelize-cli_ dengan nama **todo-apps**.

### task 2: Table "Todos

Berikut field yang ada dalam tabel **todos** :

| Field     | Data Type          |
| --------- | ------------------ |
| id        | SERIAL primary key |
| task      | STRING             |
| status    | BOOLEAN            |
| createdAt | DATE               |
| updatedAt | DATE               |

### task 3 : Membuat endpoints / routes

Berikut adalah list endpoints :

| No  | Endpoint                | Description                        |
| --- | ----------------------- | ---------------------------------- |
| 1   | Get '/'                 | Home awal                          |
| 2   | Get '/todos'            | Mengambil semua todos              |
| 3   | Post '/todos/create'    | Menambahkan task ke dalam database |
| 4   | Get '/todos/:id'        | Mengambil task dari id             |
| 5   | Get '/todos/delete/:id' | Menghapus id dari database         |

---
