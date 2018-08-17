import { Observable, Observer } from 'rxjs';

export class CustomObservablesService  {
customObservable = Observable.create(
    (observer: Observer<string>) => {
        setTimeout(()=> {observer.next('you are observing me');
    }, 2000);
        setTimeout(()=> {observer.next('still observing');
    }, 4000);
        setTimeout(() => {observer.error('Nice...you subscribed to errors!');
        }, 6000);
        setTimeout(()=> {observer.complete(); },
         10000);
    });


}