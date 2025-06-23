import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './college/student.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { EditComponent } from './edit/edit.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PDFGenerationComponent } from './pdfgeneration/pdfgeneration.component';
import { IochatComponent } from './iochat/iochat.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  { path: '', component: LoginpageComponent },
  {
    path: 'menubar',
    component: MenuBarComponent,
    children: [
      { path: '', component: FirstComponentComponent },
      { path: 'student', component: StudentComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'personal', component: PDFGenerationComponent },
      { path: 'iochat', component: IochatComponent },
      { path: 'create-admin', component: AdminComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
