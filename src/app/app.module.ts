import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SimpleComponent } from './simple/simple.component';
import { TypesComponent } from './types/types.component';
import { InputsComponent } from './inputs/inputs.component';
import { DomainService } from './services/domain.service';
import { ChildComponent } from './inputs/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SimpleComponent,
    TypesComponent,
    InputsComponent,
    ChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DomainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
