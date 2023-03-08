import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent {
  workExperience: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let work1 = {
      fecha: '2022-2023',
      ubicacion: 'Monterrey, Mx',
      puesto: 'Desarrollador React Native',
      empresa: 'Kodda',
      logros: [
        {
          descripcion:
            'Increased DAU by +35% on the beta users by implementing a video player on React Native.',
        },
        {
          descripcion:
            ' Enabled sign-up for users using android devices by implementing a library that worked as a wrapper for Firebase in the cross-platform app.',
        },
      ],
    };

    let work2 = {
      fecha: '2021-2022',
      ubicacion: 'Monterrey, Mx',
      puesto: 'Intern SDE',
      empresa: 'Servicios RC',
      logros: [
        {
          descripcion:
            'Developed a dashboard in C# that was used company-wide for budgeting by department with Telerik UI for Blazor, .NET 6 and REST APIs.',
        },
        {
          descripcion:
            'Developed and maintained 15+ web pages using website builders with HTML, CSS and JS which resulted in +24% traffic and +17% conversion rate to potential clients.',
        },
      ],
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
  }
}
