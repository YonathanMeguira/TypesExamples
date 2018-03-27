import {Component, Input, OnInit} from "@angular/core";
import {AppNotification} from "../notification";

export type InfoNotification = {
  infoSpecific: string;
}

@Component({
  selector: "app-info-notification",
  template: `
    {{notification.title}}
    {{notification.data.infoSpecific}}
  `,
  styles: []
})
export class InfoNotificationComponent implements OnInit {
  @Input() notification: AppNotification<InfoNotification>;

  constructor() {
  }

  ngOnInit() {
  }

}
