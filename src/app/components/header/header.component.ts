import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-header',
  imports: [LogoComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
