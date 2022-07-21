// // ---------- filter operator ----------
// import { Observable } from 'rxjs';
// import { filter } from 'rxjs/operators';

// interface NewsItem {
//   category: 'Business' | 'Sports';
//   content: string;
// }

// const newsFeed$ = new Observable<NewsItem>((subscriber) => {
//   setTimeout(
//     () => subscriber.next({ category: 'Business', content: 'A' }),
//     1000
//   );
//   setTimeout(() => subscriber.next({ category: 'Sports', content: 'B' }), 3000);
//   setTimeout(
//     () => subscriber.next({ category: 'Business', content: 'C' }),
//     4000
//   );
//   setTimeout(() => subscriber.next({ category: 'Sports', content: 'D' }), 6000);
//   setTimeout(
//     () => subscriber.next({ category: 'Business', content: 'E' }),
//     7000
//   );
// });

// const sportsNewsFeed$ = newsFeed$.pipe(
//   filter((item) => item.category === 'Sports')
// );

// sportsNewsFeed$.subscribe((item) => console.log(item));

// ---------- map operator ----------
// import { forkJoin } from 'rxjs';

// import { ajax } from 'rxjs/ajax';
// import { map } from 'rxjs/operators';

// const randomFirstName$ = ajax<any>(
//   'https://random-data-api.com/api/name/random_name'
// ).pipe(map((ajaxResponse) => ajaxResponse.response.first_name));

// const randomCapital$ = ajax<any>(
//   'https://random-data-api.com/api/nation/random_nation'
// ).pipe(map((ajaxResponse) => ajaxResponse.response.capital));

// const randomDish$ = ajax<any>(
//   'https://random-data-api.com/api/food/random_food'
// ).pipe(map((ajaxResponse) => ajaxResponse.response.dish));

// forkJoin([randomFirstName$, randomCapital$, randomDish$]).subscribe(
//   ([firstName, capital, dish]) =>
//     console.log(`${firstName} is from ${capital} and likes to eat ${dish}.`)
// );

// ---------- debounceTime operator ----------
// import { fromEvent } from 'rxjs';
// import { debounceTime, map } from 'rxjs/operators';

// const sliderInput = document.querySelector('input#slider');

// fromEvent(sliderInput, 'input')
//   .pipe(
//     debounceTime(2000),
//     map((event) => event.target['value'])
//   )
//   .subscribe((value) => console.log(value));

// ---------- catchError operator ----------
// import { EMPTY, Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// // this is just a logic to simulate an error
// const failingHttpRequest$ = new Observable((subscriber) => {
//   setTimeout(() => {
//     subscriber.error(new Error('Timeout'));
//   }, 3000);
// });

// console.log('App started');

// failingHttpRequest$.pipe(catchError((error) => EMPTY)).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'), // EMPTY will immediately run complete
// });
