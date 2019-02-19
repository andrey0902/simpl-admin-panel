import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '../../shared/core/models/user.model';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  isOpen = false;

  @Input() currentUser: UserModel;
  @Output() onLogOut = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event', '$event.target']) onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  ngOnInit() {
  }

  logOut(): void {
    this.onLogOut.emit();
  }

}
