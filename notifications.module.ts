import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotificationsComponent} from "./notifications/notifications.component";
import {InfoNotificationComponent} from "./info-notification/info-notification.component";
import {WarningNotificationComponent} from "./warning-notification/warning-notification.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationsComponent, InfoNotificationComponent, WarningNotificationComponent],
  exports: [NotificationsComponent, InfoNotificationComponent, WarningNotificationComponent],
  entryComponents: [NotificationsComponent, InfoNotificationComponent, WarningNotificationComponent]
})
export class NotificationsModule {
}
