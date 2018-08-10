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
    ServicesDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
