import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
