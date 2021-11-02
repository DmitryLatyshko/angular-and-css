import { Component, ViewEncapsulation } from "@angular/core";
import { ViewEncapsulationBaseComponent } from "../viewencapsulation-base/viewencapsulation-base.component";

@Component({
  selector: 'viewencapsulation-emulated',
  templateUrl: './viewencapsulation-emulated.component.html',
  styleUrls: ['./viewencapsulation-emulated.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ViewEncapsulationEmulatedComponent extends ViewEncapsulationBaseComponent {

}
