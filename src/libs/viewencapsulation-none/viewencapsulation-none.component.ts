import { Component, ViewEncapsulation } from "@angular/core";
import { ViewEncapsulationBaseComponent } from "../viewencapsulation-base/viewencapsulation-base.component";

@Component({
  selector: 'viewencapsulation-none',
  templateUrl: './viewencapsulation-none.component.html',
  styleUrls: ['./viewencapsulation-none.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewEncapsulationNoneComponent extends ViewEncapsulationBaseComponent {}
