import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PassportComponent } from './passport/passport.component';
import { IntlPrescriptionsComponent } from './intl-prescriptions/intl-prescriptions.component';
import { IntlInsComponent } from './intl-ins/intl-ins.component';
import { CountryDirComponent } from './country-dir/country-dir.component';
import { KoreaComponent } from './countries/korea/korea.component';
import { PortugalComponent } from './countries/portugal/portugal.component';
import { SpainComponent } from './countries/spain/spain.component';
import { MexicoComponent } from './countries/mexico/mexico.component';
import { CanadaComponent } from './countries/canada/canada.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TurkeyComponent } from './countries/turkey/turkey.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin-information',
    component: AdminComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'passport',
    component: PassportComponent,
  },
  {
    path: 'international-prescriptions',
    component: IntlPrescriptionsComponent,
  },
  {
    path: 'international-insurance',
    component: IntlInsComponent,
  },
  {
    path: 'country-directory',
    component: CountryDirComponent,
  },
  {
    path: 'country/south-korea',
    component: KoreaComponent,
  },
  {
    path: 'country/portugal',
    component: PortugalComponent,
  },
  {
    path: 'country/spain',
    component: SpainComponent,
  },
  {
    path: 'country/mexico',
    component: MexicoComponent,
  },
  {
    path: 'country/canada',
    component: CanadaComponent,
  },
  {
    path: 'country/turkey',
    component: TurkeyComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];