import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUser, heroChatBubbleBottomCenter, heroSun, heroEllipsisVertical } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [provideIcons({ heroUser , heroChatBubbleBottomCenter, heroSun, heroEllipsisVertical})]
})
export class HeaderComponent {

}
