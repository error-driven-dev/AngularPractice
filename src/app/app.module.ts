import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { LukeComponent } from './luke/luke.component';
import { VadorComponent } from './vador/vador.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { BetterDirectiveDirective } from './directives/better-directive.directive';
import { EventDrivenDirectiveDirective } from './directives/event-driven-directive.directive';
import { HostBindingDirectiveDirective } from './directives/host-binding-directive.directive';
import { DynamicBindingDirectiveDirective } from './directives/dynamic-binding-directive.directive';
import { StructuralDirective } from './directives/structural.directive';
import { ServicesDemoComponent } from './services-demo/services-demo.component';
import { ServiceProducerComponent } from './services-demo/service-producer/service-producer.component';
import { ServiceConsumerComponent } from './services-demo/service-consumer/service-consumer.component';
import { ObservablesComponent } from './observables/observables.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    AddMemberComponent,
    LukeComponent,
    VadorComponent,
    BuiltInDirectivesComponent,
    CustomDirectiveDirective,
    BetterDirectiveDirective,
    EventDrivenDirectiveDirective,
    HostBindingDirectiveDirective,
    DynamicBindingDirectiveDirective,
    StructuralDirective,
    ServicesDemoComponent,
    ServiceProducerComponent,
    ServiceConsumerComponent,
    ObservablesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
