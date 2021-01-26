import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.setDefaultLang("en");
    this.translateService.use("en");
  }
}
