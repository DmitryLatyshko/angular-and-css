import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ViewEncapsulationEmulated2Component } from 'src/libs/viewencapsulation-emulated-2/viewencapsulation-emulated-2.component';
import { ViewEncapsulationEmulatedComponent } from 'src/libs/viewencapsulation-emulated/viewencapsulation-emulated.component';
import { ViewEncapsulationNone2Component } from 'src/libs/viewencapsulation-none-2/viewencapsulation-none-2.component';
import { ViewEncapsulationNoneComponent } from 'src/libs/viewencapsulation-none/viewencapsulation-none.component';
import { ViewEncapsulationShadowDom2Component } from 'src/libs/viewencapsulation-shadowdom-2/viewencapsulation-shadowdom-2.component';
import { ViewEncapsulationShadowDom3Component } from 'src/libs/viewencapsulation-shadowdom-3/viewencapsulation-shadowdom-3.component';
import { ViewEncapsulationShadowDomComponent } from 'src/libs/viewencapsulation-shadowdom/viewencapsulation-shadowdom.component';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ViewEncapsulationEmulatedPageComponent } from './pages/viewencapsulation-emulated/viewencapsulation-emulated-page.component';
import { ViewEncapsulationNonePageComponent } from './pages/viewencapsulation-none/viewencapsulation-none-page.component';
import { ViewEncapsulationShadowDomPageComponent } from './pages/viewencapsulation-shadowdom/viewencapsulation-shadowdom-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'viewencapsulation-emulated',
    component: ViewEncapsulationEmulatedPageComponent,
  },
  {
    path: 'viewencapsulation-none',
    component: ViewEncapsulationNonePageComponent,
  },
  {
    path: 'viewencapsulation-shadowdom',
    component: ViewEncapsulationShadowDomPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ViewEncapsulationEmulatedPageComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationEmulated2Component,
    ViewEncapsulationNonePageComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationNone2Component,
    ViewEncapsulationShadowDomPageComponent,
    ViewEncapsulationShadowDomComponent,
    ViewEncapsulationShadowDom2Component,
    ViewEncapsulationShadowDom3Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
