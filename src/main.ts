import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component.ts';

bootstrap(AppComponent)
    .catch((error: Error) => console.error(error));