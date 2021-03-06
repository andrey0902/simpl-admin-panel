import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {

  @Input() isVisible = true;
  visibility = 'shown';

  sideNavOpened = true;
  matDrawerOpened = false;
  matDrawerShow = true;
  sideNavMode = 'side';

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  // constructor(private media: ObservableMedia) { }

  ngOnInit() {
    // this.media.subscribe((mediaChange: MediaChange) => {
    //   this.toggleView();
    // });
  }
  getRouteAnimation(outlet) {

    return outlet.activatedRouteData.animation;
    //return outlet.isActivated ? outlet.activatedRoute : ''
  }

  toggleView() {
    // if (this.media.isActive('gt-md')) {
    //   this.sideNavMode = 'side';
    //   this.sideNavOpened = true;
    //   this.matDrawerOpened = false;
    //   this.matDrawerShow = true;
    // } else if(this.media.isActive('gt-xs')) {
    //   this.sideNavMode = 'side';
    //   this.sideNavOpened = false;
    //   this.matDrawerOpened = true;
    //   this.matDrawerShow = true;
    // } else if (this.media.isActive('lt-sm')) {
    //   this.sideNavMode = 'over';
    //   this.sideNavOpened = false;
    //   this.matDrawerOpened = false;
    //   this.matDrawerShow = false;
    // }
  }

  goTo() {
    console.log('goTo');
  }

}
