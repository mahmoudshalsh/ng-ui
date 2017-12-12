import * as $ from 'jquery';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    printHi(): void {
        console.log($('.lead').html());
    }
}
