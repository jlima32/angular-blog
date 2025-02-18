import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { SearchComponent } from "../search/search.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-header',
  imports: [LogoComponent, SearchComponent, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
