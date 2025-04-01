import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    {path:'home',
    component:HomeComponent
    },
    {path:'portfolio',
        component:PortfolioComponent
    },
    {path:'contact',
    component:ContactsComponent
    },
    {path:'resume',
        component:ResumeComponent
    },

    {path:'**',component:HomeComponent,
        pathMatch:'full'

    }
    


];
