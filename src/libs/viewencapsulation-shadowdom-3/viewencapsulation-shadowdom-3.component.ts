import { Component, ViewEncapsulation } from "@angular/core";
import { ViewEncapsulationBaseComponent } from "../viewencapsulation-base/viewencapsulation-base.component";

@Component({
  selector: 'viewencapsulation-shadowdom-3',
  templateUrl: './viewencapsulation-shadowdom-3.component.html',
  styleUrls: ['./viewencapsulation-shadowdom-3.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationShadowDom3Component extends ViewEncapsulationBaseComponent {}
