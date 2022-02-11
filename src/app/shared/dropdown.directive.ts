import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    @HostBinding('class.open') isOpen =false
    // @HostListener('click') toggleOpen(eventData: Event){
    //     this.isOpen = !this.isOpen
    // }
    // a dropdown can also be closed by a click anywhere outside;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}
}