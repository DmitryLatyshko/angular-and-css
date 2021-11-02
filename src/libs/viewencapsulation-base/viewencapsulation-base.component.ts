import { AfterViewInit, Directive, ElementRef, Input, ViewChild } from "@angular/core";

@Directive()
export abstract class ViewEncapsulationBaseComponent implements AfterViewInit {
  @ViewChild('divBlock')
  public divBlock: ElementRef;

  @Input()
  public color: string;

  @Input()
  public border: string;

  @Input()
  public background: string;

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    const htmlElement = this.divBlock.nativeElement as HTMLElement;
    htmlElement.classList.add(this.color);
    htmlElement.classList.add(this.border);
    htmlElement.classList.add(this.background);
  }
}
