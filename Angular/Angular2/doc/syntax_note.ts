1. boot.ts 
Or main.ts
Load main component
bootstrap(AppComponent);

2. Component reference other components
import {ContactComponent} from './other.component';

directives:[OtherComponent],

3. Component accepting variables
inputs: ['passed_in_variables']
inputs: ['contacts']

4. Passing values to Component
<contact-list [contacts]='contacts'></contact-list>
<my-hero-detail [hero]="selectedHero"></my-hero-detail>

5. Redirect
  gotoDetail(path,id): void {
    this.router.navigate([path, id]);
  }
  goBack(): void {
    this.location.back();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

6. if
<div *ngIf="hero">

</div>
 
7. 2 way binding
<input [(ngModel)]="row.name" placeholder="name" />
  
