import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CustomerDashboardComponent } from './pages/customer/customer-dashboard/customer-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StaffDashboardComponent } from './pages/staff/staff-dashboard/staff-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { CustomerGuard } from './services/customer.guard';
import { StaffGuard } from './services/staff.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PageNotFoundComponent } from './PageNotFound.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {    path: 'signup',    component: SignupComponent,    pathMatch: 'full',  },
  {    path: 'about-us',    component: AboutUsComponent,    pathMatch: 'full',  },
  {    path: 'login',    component: LoginComponent,    pathMatch: 'full',  },
  {    path: 'admin',    component: DashboardComponent,    pathMatch: 'full',
      // canActivate:[AdminGuard],
      },
  {    path: 'staff-dashboard',    component: StaffDashboardComponent,    pathMatch: 'full',
    // canActivate:[StaffGuard],  
  },
  {    path: 'customer-dashboard',    component: CustomerDashboardComponent,    pathMatch: 'full',   
   // canActivate:[CustomerGuard], 
   },

   {    path: '**',    component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
