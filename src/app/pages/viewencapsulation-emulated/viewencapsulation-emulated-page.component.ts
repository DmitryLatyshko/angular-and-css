import { Component } from "@angular/core";

@Component({
  selector: 'viewencapsulation-emulated-page',
  templateUrl: './viewencapsulation-emulated-page.component.html',
  styleUrls: ['./viewencapsulation-emulated-page.component.scss'],
  styles: [`.container {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }`]
})
export class ViewEncapsulationEmulatedPageComponent {

}
