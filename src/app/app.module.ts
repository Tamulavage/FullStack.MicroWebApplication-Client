import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {TransactionComponent} from './transaction/transaction.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MessagesComponent} from './messages/messages.component';
import {UserSearchComponent} from './user-search/user-search.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AccountsComponent} from './accounts/accounts.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import { MainWindowComponent } from './main-window/main-window.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransactionComponent,
    MessagesComponent,
    UserSearchComponent,
    UserDetailComponent,
    DashboardComponent,
    TransactionListComponent,
    AccountsComponent,
    MainWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
