import { Component } from '@angular/core';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
// app

@Component({
    moduleId: module.id,
    selector: 'maestro-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    menuItems: any[] = [
        {
            title: 'menu.home',
            link: ['/home']
        },
        {
            title: 'menu.about',
            link: ['/about']
        }
    ];

    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
