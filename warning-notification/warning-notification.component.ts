import {Component, Input, OnInit} from "@angular/core";
import {AppNotification} from "@datorama/notifications/notification";

export type WarningNotification = {
  warningSpecific: string;
}

@Component({
  selector: "app-warning-notification",
  template: `
    {{notification.title}}
    {{notification.data.warningSpecific}}
  `,
  styles: []
})
export class WarningNotificationComponent implements OnInit {
  @Input() notification: AppNotification<WarningNotification>;

  constructor() {
  }

  ngOnInit() {
  }

}
