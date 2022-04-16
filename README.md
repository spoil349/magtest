# TableTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Test task requirements

1. Сформировать свой массив данных или взять любое готовое API.
2. Пусть одним из параметров будет какое-то наименование (что бы можно было искать по нему), и ещё будет параметр с датой (что бы можно было фильтровать). Остальные данные вообще любые, но пусть их и количества объектов будет достаточно для того, что бы при некоторых размерах экрана данные не умещались ни в ширину ни в высоту.
3. Необходимо реализовать две страницы. У каждой страницы должен быть собственный адрес. Должна быть возможность переключения между страницами.
4. Вывести данные в виде таблицы (шапка и тело). На каждой странице расположить фильтр по дате (диапазон) и поиск по наименованию.
5. В случае если данные не умещаются в высоту, внутри таблицы должен появиться скролл. Шапка таблицы всегда должна оставаться на месте.
6. В случае если данные не умещаются в ширину, так же должен появляться скролл но первые два столбца (наименование и дата) должны оставаться на месте.
7. Фильтры должны влиять на результат в таблице и сохраняться (каждый для своей страницы).
8. При открытии страницы, где были установлены фильтры. Данные должны быть отфильтрованы, а значения установлены.
9. Возможность очистить фильтр на странице.
