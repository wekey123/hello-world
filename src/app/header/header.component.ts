import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 private name: string;
 public userDetails: any = [
    { id: 11, name: 'Mr. Nice', orgId: 1 },
    { id: 12, name: 'Narco', orgId: 2},
    { id: 13, name: 'Bombasto', orgId: 2 },
    { id: 14, name: 'Celeritas', orgId: 2 },
    { id: 15, name: 'Magneta', orgId: 2 },
    { id: 16, name: 'RubberMan', orgId: 1 },
    { id: 17, name: 'Dynama', orgId: 1 },
    { id: 18, name: 'Dr IQ', orgId: 1 },
    { id: 19, name: 'Magma', orgId: 1 },
    { id: 20, name: 'Tornado', orgId: 1 }
  ];
  private orgDetails: any = [
    {id: 1, orgName: 'GHX', roleId: 1},
    {id: 2, orgName: 'Numeric', roleId: 2}
  ];
  private roles: any = [
    {id: 1, roleName: 'ADMIN'},
    {id: 2, roleName: 'USER'}
  ];
  public getUserDetails: any;
  public getOrgDetails: any;
  public getRoles: any;
  public promise: any = {
    userDetails: [],
    orgDetails: [],
    roles: [],
  };
  public loader: any = {
    user: false,
    org: false,
    role: false
  }
  constructor() { }
  
  ngOnInit() {
    this.getUserDetails = Observable.create(observer => {
        this.loader.user = true;
        setInterval(() => {
          observer.next(this.userDetails);
          observer.complete();
        }, 2000);
    });

    this.getOrgDetails = Observable.create(observer => {
       this.loader.org = true;
      setInterval(() => {
        observer.next(this.orgDetails);
        observer.complete();
      }, 3000);
    });
  
    this.getRoles = Observable.create(observer => {
      this.loader.role = true;
      setInterval(() => {
        observer.next(this.roles);
        observer.complete();
      }, 4000);
    });
    this.getDetails();
  }

   getDetails() {
     this.getUserDetails.subscribe(
      n => {
        this.promise.userDetails = n;
        console.log(n);
      },
      e => {
        console.log(`onError: ${e}`);
      },
      () => {
        this.loader.user = false;
        console.log('onCompleted');
      });

      this.getOrgDetails.subscribe(next => {
        console.log(next);
          this.promise.orgDetails = next;
           this.loader.org = false;
      });
      this.getRoles.subscribe(next => { 
        console.log(next)
        this.promise.roles = next;
         this.loader.role = false;
      });
   }

}
