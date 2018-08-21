import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router';
import { LukeComponent } from './luke/luke.component';
import { ObservablesComponent } from './observables/observables.component';
import { ServicesDemoComponent } from './services-demo/services-demo.component';
import { FormsComponent } from './forms/forms.component';

const appRoutes: Routes = [
    {path: 'luke' , component: LukeComponent },
    {path: 'services' , component: ServicesDemoComponent },
    {path: 'observables' , component: ObservablesComponent },
    {path: 'forms', component: FormsComponent }];

@NgModule(
{    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]}
)
export class AppRoutingModule {

}