import { addItem, run } from './../03-utils';
import { first, last, elementAt, min, max, find, findIndex, single, map, pluck, tap, mergeMap, filter, catchError, switchMap, ignoreElements } from 'rxjs/operators';
import { from, fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Task 1. first()
// Создайте поток объектов с двумя свойствами: action и priority
// Получите первый объект из потока с высоким приоритетом
(function task1(): void {
    // const stream$ = from([
    //     { action: "copy", priority: 2 },
    //     { action: "move", priority: 3 },
    //     { action: "cut", priority: 1 },
    //     ]).pipe(
    //     first((value) => value.priority === 1)
    // );

    const items = [
        { action: 'merge', priority: 'low' },
        { action: 'rebase', priority: 'middle' },
        { action: 'push', priority: 'high' },
        ];
        const stream$ = from(items).pipe(
        first(({ priority }) => priority === 'high'),
        );

    //run(stream$);
})();

// Task 2. last()
// Создайте поток слов из предложения 'Мягкое слово кости не ломит'. Получите последнюю слово, которое содержит 2 символа
(function task2(): void {
    const stream$ = from('Мягкое слово кости не ломит'.split(' ')).pipe(last(value => value.length === 2));
    
    // run(stream$);
})();


// Task 3. elementAt()
// Создайте поток событий клик по документу. Получите второй объект события клик.
(function task3(): void {
    //const stream$ = fromEvent(document.getElementById('runBtn'),'click').pipe(elementAt(1));
    //const stream$ = fromEvent(document,'click').pipe(elementAt(1));

    
    //run(stream$, { outputMethod: "console"});
})();

// Task 4. min() (Vitalii Puzakov)
// Создайте поток слов из предложения 'Мягкое слово кости не ломит'. Найдите минимальную длину слова в предложении.
(function task4() {
    const string = 'Мягкое слово кости не ломит';
    const stream$ = from(string.split(' ')).pipe(map(value => value.length),min());

    //run(stream$);
})();


// Task 5. max()
// Создайте поток объектов с двумя свойствами: title, quantity.
// Получите объект с максимальным значением quantity 
(function task5() {
    const stream$ = from([
        { title: "title1", quantity: 2 },
        { title: "title2", quantity: 3 },
        { title: "title3", quantity: 1 },
        ]).pipe(
        max((a, b) => a.quantity - b.quantity)
        );

    //run(stream$);
})();

// Task 6. find() (Andrii Olepir)
// Создайте поток, используя ajax(`https://jsonplaceholder.typicode.com/users`)
// Получите первого пользователя, email которого, заканчивается на 'biz'  
(function task6() {

//     const stream$ = ajax(`https://jsonplaceholder.typicode.com/users`)
// .pipe(
// filter(r => r.status === 200),
// switchMap(r => from(r.response)),
// find((data: any) => data.email.endsWith('biz')),
// map(user => user.email)
// )

// const request$ = ajax(`https://jsonplaceholder.typicode.com/users`);
// const targetEnding = 'biz';
// const stream$ = request$.pipe(
// switchMap(({ response } )=> from(response)),
// first(({ email }) => email.endsWith(targetEnding)),
// );

    // const stream$ =ajax(`https://jsonplaceholder.typicode.com/users`).pipe(
    //     pluck('response'),
    //     mergeMap(value => value),
    //     tap((value: any): any => console.log(value.email)),
    //     find((value: any): any => value.email.includes('biz'))
    // )

    //run(stream$);
})();

// Task7. findIndex()
// Создайте поток объектов с двумя свойствами: id, name.
// Получите номер объекта в потоке, у которого длина name больше 10 символов  
(function task7() {

    // const stream$ = from([
    //     { id: 76, name: "name2" },
    //     { id: 1, name: "longName123" },
    //     { id: 56, name: "name3" },
    //     ]).pipe(
    //     findIndex(value => value.name.length > 10)
    //     );

    // const items = [
    //     { id: 1, name: 'Max33333' },
    //     { id: 2, name: 'Andrei123123123' },
    //     { id: 3, name: 'Ivan222' },
    //     { id: 4, name: 'Iryna32323' },
    //     ];

    //     const stream$ = from(items).pipe(
    //     findIndex(({ name }) => name.length > 10),
    // );

    // run(stream$);
})();

// Task 8. single()
// Создайте поток объектов с двумя свойствами: title, priority так, чтобы некоторые объекты
// имели одинаковые значения title
// Получите объект у которого title = 'Learn RxJS', если он единственный в потоке
(function task8() {

    // const items = [
    //     { title: 'Learn RxJS', priority: 'low' },
    //     { title: 'hello', priority: 'middle' },
    //     { title: 'hello', priority: 'high' },
    //     ];
        
    //     const stream$ = from(items).pipe(
    //     single(({ title }) => title === 'Learn RxJS'),
    // );
    
    //run(stream$);
})();

// Task 9. ignoreElements()
// Придумать задачу и реализовать


export function runner() {}

// Task 10.
// Из массива получите данные JavaScript разработчиков. С помощью оператора single() определите разработчика из Польши, получите объект с его данными.
// Если он не один, то вы получите ошибку, обработайте её, выведите сообщение 'We have more then one developer from Poland' в консоль.
// Далее выведите самого старшего польского разработчика. 
// операторы, которые вам помогут: catchError(), switchMap(), of();
(function task10() {
    const developers = [
        { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
        { firstName: 'Merlin', lastName: 'M.', country: 'Belarus', continent: 'Europe', age: 48, language: 'Ruby', githubAdmin: 'no' },
        { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
        { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 46, language: 'JavaScript', githubAdmin: 'yes' },
        { firstName: 'Jerry', lastName: 'K.', country: 'Poland', continent: 'Europe', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
        { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 47, language: 'JavaScript', githubAdmin: 'no' }
    ];

    const stream$ = from(developers).pipe(
        filter(developer => developer.language === 'JavaScript'),
        single(developer => developer.country === 'Poland'),
        catchError(error => {
            console.log(`We have more then one developer from Poland`);
            return of(error).pipe( // Оборачиваем в of(), чтобы по буквам не выводить
                switchMap(error => from(developers)),
                filter(developer => developer.language === 'JavaScript'),
                max((a,b) => a.age - b.age)
            ); 
        }),
    )
    
    //run(stream$);
})();

// Task 11
// Получите последний объукт с поменять местами елементы последнего объекта 
(function task11() {
    const items = [
        { title: 'Learn RxJS', priority: 'low' },
        { title: 'hello', priority: 'middle' },
        { title: 'hello', priority: 'high' },
    ];

    const stream$ = from(items).pipe(
        last(),
        map((elem): any => {
            const {title, priority} = elem;
            return {
                priority: title,
                title: priority
            }
        })
    );
    
    //run(stream$);
})();

// Task 12. Похожа на 10, только с ignoreElements()
// Из массива получите данные JavaScript разработчиков. С помощью оператора single() определите разработчика из Польши
// получите объект с его данными.

// Если разработчик не один, то вы получите ошибку, обработайте её - выведите сообщение 'We have more then one developer from Poland' в консоль.
// После ошибки проигнорируйте дальнейшую обработку данных.

// Добавьте оператор в самый конец который, после успешного получения единственного разработчика из Польши, выведет только страну.

// Операторы, которые вам помогут: filter(), single(), catchError(), of(), ignoreElements(), map();
(function task12() {
    const developers = [
        { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
        { firstName: 'Merlin', lastName: 'M.', country: 'Belarus', continent: 'Europe', age: 48, language: 'Ruby', githubAdmin: 'no' },
        { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
        { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 46, language: 'JavaScript', githubAdmin: 'yes' },
        { firstName: 'Jerry', lastName: 'K.', country: 'Poland', continent: 'Europe', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
        { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 47, language: 'JavaScript', githubAdmin: 'no' }
    ];

    const stream$ = from(developers).pipe(
        filter(developer => developer.language === 'JavaScript'),
        single(developer => developer.country === 'China'), // при Poland получим ошибку
        catchError(error => {
            console.log(`ERROR: We have more then one developer from Poland`);
            return of(error).pipe(
                ignoreElements()
            )
        }),
        map(developer => developer.country)
    )
    //run(stream$);
})();