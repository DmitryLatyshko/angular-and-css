import { Component, ViewEncapsulation } from "@angular/core";
import { ViewEncapsulationBaseComponent } from "../viewencapsulation-base/viewencapsulation-base.component";

@Component({
  selector: 'viewencapsulation-none-2',
  templateUrl: './viewencapsulation-none-2.component.html',
  styleUrls: ['./viewencapsulation-none-2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewEncapsulationNone2Component extends ViewEncapsulationBaseComponent {}
