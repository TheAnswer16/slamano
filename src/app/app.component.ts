import { Component, OnInit, DoCheck } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'myapp';
  changeDetected = false;

  ngOnInit(): void {
    console.log('Componente inicializado.');
  }

  ngDoCheck(): void {
    console.log('Mudança detectada!');
    this.changeDetected = !this.changeDetected; // Exemplo simples de lógica em DoCheck
  }
}
