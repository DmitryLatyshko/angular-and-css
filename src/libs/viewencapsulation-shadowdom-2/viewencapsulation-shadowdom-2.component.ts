import { Component, ViewEncapsulation } from "@angular/core";
import { ViewEncapsulationBaseComponent } from "../viewencapsulation-base/viewencapsulation-base.component";

@Component({
  selector: 'viewencapsulation-shadowdom-2',
  templateUrl: './viewencapsulation-shadowdom-2.component.html',
  styleUrls: ['./viewencapsulation-shadowdom-2.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationShadowDom2Component extends ViewEncapsulationBaseComponent {}
