import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { LukeComponent } from './luke/luke.component';
import { ObservablesComponent } from './observables/observables.component';
import { ServicesDemoComponent } from './services-demo/services-demo.component';

const appRoutes: Routes = [
    {path: 'luke' , component: LukeComponent },
    {path: 'services' , component: ServicesDemoComponent },
    {path: 'observables' , component: ObservablesComponent }];

@NgModule(
{    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]}
)
export class AppRoutingModule {

}