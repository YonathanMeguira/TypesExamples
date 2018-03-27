import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {InfoNotificationComponent} from "../info-notification/info-notification.component";
import {WarningNotificationComponent} from "../warning-notification/warning-notification.component";
import {AppNotification, NotificationComponent, ServerNotification, NotificationsComponents} from "@datorama/notifications/notification";

@Component({
  selector: "app-notifications",
  template: `
    <section class="container">
      <div #container></div>
    </section>
  `
})
export class NotificationsComponent implements OnInit {
  notifications: ServerNotification[];
  @ViewChild("container", {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.notifications = [{
      id: 1,
      type: "info",
      title: "info",
      templateString: "{\"infoSpecific\": \"infoSpecific\"}"
    },
      {
        type: "warning",
        id: 2,
        title: "warning",
        templateString: "{\"warningSpecific\": \"warningSpecific\"}"
      }];

    this.notifications.forEach((n) => {

      const component = this.getComponent(n);
      const factory = this.resolver.resolveComponentFactory(component);

      const ref = this.container.createComponent(factory);
      (ref.instance as NotificationComponent).notification = new AppNotification(n);

    });
  }

  getComponent(notification: ServerNotification): NotificationsComponents {
    const m = {
      info: InfoNotificationComponent,
      warning: WarningNotificationComponent
    };

    return m[notification.type];
  }

}
