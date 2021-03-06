import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [
        ROUTER_DIRECTIVES
    ],
    selector: 'cut-app',
    template: require('./app.component.html')
})
export class AppComponent {
    public title: string = 'CUT App';
}
