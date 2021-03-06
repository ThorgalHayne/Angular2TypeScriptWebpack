import { RouterConfig } from '@angular/router';
import { ConceptsAndAlgorithmsComponent } from './conceptsAndAlgorithms.component.ts';

export const CONCEPTS_AND_ALGORITHMS_ROUTES: RouterConfig = [
    {
        component: ConceptsAndAlgorithmsComponent,
        path: 'ConceptsAndAlgorithms'
    }
] as RouterConfig;
