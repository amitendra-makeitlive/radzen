/*
  This file is automatically generated. Any changes will be overwritten.
  Modify opportunity-statuses.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { GridComponent } from '@radzen/angular/dist/grid';

import { ConfigService } from '../config.service';
import { AddOpportunityStatusComponent } from '../add-opportunity-status/add-opportunity-status.component';
import { EditOpportunityStatusComponent } from '../edit-opportunity-status/edit-opportunity-status.component';

import { CrmService } from '../crm.service';
import { SecurityService } from '../security.service';

export class OpportunityStatusesGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('grid0') grid0: GridComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  crm: CrmService;

  security: SecurityService;
  getOpportunityStatusesResult: any;
  getOpportunityStatusesCount: any;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.crm = this.injector.get(CrmService);
    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.crm.getOpportunityStatuses(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, null, null, null)
    .subscribe((result: any) => {
      this.getOpportunityStatusesResult = result.value;

      this.getOpportunityStatusesCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0LoadData(event: any) {
    this.crm.getOpportunityStatuses(`${event.filter}`, event.top, event.skip, `${event.orderby}`, event.top != null && event.skip != null, ``, null, null)
    .subscribe((result: any) => {
      this.getOpportunityStatusesResult = result.value;

      this.getOpportunityStatusesCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0Delete(event: any) {
    this.crm.deleteOpportunityStatus(event.Id)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `OpportunityStatus deleted!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to delete OpportunityStatus` });
    });
  }

  grid0Add(event: any) {
    this.dialogService.open(AddOpportunityStatusComponent, { parameters: {}, title: 'Add Opportunity Status' });
  }

  grid0RowSelect(event: any) {
    this.dialogService.open(EditOpportunityStatusComponent, { parameters: {Id: event.Id}, title: 'Edit Opportunity Status' });
  }
}
