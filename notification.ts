import {
  WarningNotification,
  WarningNotificationComponent
} from "@datorama/notifications/warning-notification/warning-notification.component";
import {InfoNotification, InfoNotificationComponent} from "@datorama/notifications/info-notification/info-notification.component";
import {Type} from "@angular/core";

export type NotificationType = "info" | "warning";

interface Shared {
  title: string;
  type: NotificationType;
  id: number;
}

export interface ServerNotification extends Shared {
  templateString: string;
}

export class AppNotification<T> implements Shared {
  title: string;
  type: NotificationType;
  id: number;
  data?: T;

  constructor(params) {
    this.title = params.title;
    this.id = params.id;
    this.type = params.type;
    this.data = JSON.parse(params.templateString);
  }
}

export type NotificationsComponents = Type<InfoNotificationComponent | WarningNotificationComponent>;

export type NotificationComponent = {
  notification: AppNotification<InfoNotification | WarningNotification>
}
