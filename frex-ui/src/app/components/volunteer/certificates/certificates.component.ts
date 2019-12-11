// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-certificates',
//   templateUrl: './certificates.component.html',
//   styleUrls: ['./certificates.component.scss']
// })
// export class CertificatesComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../shared/certificate.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {


  isSmall: boolean;
  navigated = true;
  constructor(private service: CertificateService,private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.service.getCertificateDetailList();
    this.breakpointObserver.observe(
      [Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall]
    ).subscribe(result => {
      this.isSmall = !result.matches;
    });
  }

}
