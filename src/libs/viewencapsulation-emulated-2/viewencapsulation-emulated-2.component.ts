import { Component, ViewEncapsulation } from '@angular/core';
import { ViewEncapsulationBaseComponent } from '../viewencapsulation-base/viewencapsulation-base.component';

@Component({
  selector: 'viewencapsulation-emulated-2',
  templateUrl: './viewencapsulation-emulated-2.component.html',
  styleUrls: ['./viewencapsulation-emulated-2.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ViewEncapsulationEmulated2Component extends ViewEncapsulationBaseComponent {}
