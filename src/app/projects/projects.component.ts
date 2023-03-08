import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let project1 = {
      fecha: '2022',
      ubicacion: 'Tec de Monterrey',
      tipo: 'Functional and parallel programming',
      proyecto: 'Vending Machine Simulator',
      logros: [
        {
          descripcion:
            'Developed a vending machine simulator, applied parallel programming so that 20+ vending machines could be used and analyzed simultaneously while using functional programming.',
        },
      ],
    };

    let project2 = {
      fecha: '2022',
      ubicacion: 'Tec de Monterrey',
      tipo: 'Web Programming',
      proyecto: 'Medical Dashboard Web App',
      logros: [
        {
          descripcion:
            'Designed, created, and implemented a data base with Azure Data Studio as well as the REST API with NodeJS, it was used to show relevant health information on a doctor’s dashboard and show information on a videogame meant for senior citizens.',
        },
      ],
    };

    this.projects.push(project1);
    this.projects.push(project2);
  }
}
