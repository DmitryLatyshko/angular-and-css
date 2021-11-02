import { Component, ViewEncapsulation } from "@angular/core";
import { ViewEncapsulationBaseComponent } from "../viewencapsulation-base/viewencapsulation-base.component";

@Component({
  selector: 'viewencapsulation-shadowdom',
  templateUrl: './viewencapsulation-shadowdom.component.html',
  styleUrls: ['./viewencapsulation-shadowdom.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationShadowDomComponent extends ViewEncapsulationBaseComponent {}
