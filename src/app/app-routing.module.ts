import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListUserCategoryComponent } from './list-user-category/list-user-category.component';
import { IncomeComponent } from './income/income.component';
import { ListIncomeComponent } from './list-income/list-income.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { ManageExpenseComponent } from './manage-expense/manage-expense.component';
import { ListManageVendorComponent } from './list-manage-vendor/list-manage-vendor.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ListuserComponent } from './listuser/listuser.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ListSubcategoryComponent } from './list-subcategory/list-subcategory.component';
import { ListManageuserComponent } from './list-manageuser/list-manageuser.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';
import { ListExpenseComponent } from './list-expense/list-expense.component';
import { AccounttypeComponent } from './accounttype/accounttype.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCategoryComponent } from './user-category/user-category.component';
import { UserSubCategoryComponent } from './user-sub-category/user-sub-category.component';
import { ListUserSubCategoryComponent } from './list-user-sub-category/list-user-sub-category.component';
import { ListAddVendorComponent } from './list-add-vendor/list-add-vendor.component';
import { UserExpenseComponent } from './user-expense/user-expense.component';
import { ListUserExpenseComponent } from './list-user-expense/list-user-expense.component';
import { UserAccountTypeComponent } from './user-account-type/user-account-type.component';
import { ListUserAccountTypeComponent } from './list-user-account-type/list-user-account-type.component';
import { UserIncomeComponent } from './user-income/user-income.component';
import { ListUserIncomeComponent } from './list-user-income/list-user-income.component';

const routes: Routes = [
  {
    component: SignupComponent,
    path: "app-signup"
  },
  {
    component: ListuserComponent,
    path: "app-listuser"
  },
  {
    component: LoginComponent,
    path: "app-login"
  },
  {
    component: ForgetPasswordComponent,
    path: "app-forget-password"
  },
  {
    component: ResetPasswordComponent,
    path: "app-reset-password"
  },
  {
    component: ManageCategoryComponent,
    path: "app-manage-category"
  },
  {
    component: ListCategoryComponent,
    path: "app-list-category"
  },
  {
    component: SubCategoryComponent,
    path: "app-sub-category"
  },
  {
    component: ListSubcategoryComponent,
    path: "app-list-subcategory"
  },
  {
    component: ListManageuserComponent,
    path: "app-list-manageuser"
  },
  {
    component: ManageUserComponent,
    path: "app-manage-user"
  },
  {
    component: AdminDashboardComponent,
    path: "app-admin-dashboard"
  },
  {
    component: UserDashboardComponent,
    path: "app-user-dashboard"
  },
  {
    component: ManageVendorComponent,
    path: "app-manage-vendor"
  },
  {
    component: ListManageVendorComponent,
    path: "app-list-manage-vendor"
  },
  {
    component: ListExpenseComponent,
    path: "app-list-expense"
  },
  {
    component: ManageExpenseComponent,
    path: "app-manage-expense"
  },
  {
    component: AccounttypeComponent,
    path: "app-accounttype"
  },
  {
    component: ListAccountComponent,
    path: "app-list-account"
  },
  {
    component: HomeDashboardComponent,
    path: "app-home-dashboard"
  },
  {
    component: ListIncomeComponent,
    path: "app-list-income"
  },
  {
    component: IncomeComponent,
    path: "app-income"
  },
  {
    component: UserCategoryComponent,
    path: "app-user-category"
  },
  {
    component: ListUserCategoryComponent,
    path: "app-list-user-category"
  },
  {
    component: DashboardComponent,
    path: "app-dashboard"
  },
  // {
  //   component:AdminDashboardComponent,
  //   path:""
  // }
  {
    component: UserSubCategoryComponent,
    path: "app-user-sub-category"
  },
  {
    component: ListUserSubCategoryComponent,
    path: "app-list-user-sub-category"
  },
  {
    component: AddVendorComponent,
    path: "app-add-vendor"
  },
  {
    component: ListAddVendorComponent,
    path: "app-list-add-vendor"
  },
  {
    component: UserExpenseComponent,
    path: "app-user-expense"
  },
  {
    component: ListUserExpenseComponent,
    path: "app-list-user-expense"
  },
  {
    component: UserAccountTypeComponent,
    path: "app-user-account-type"
  },
  {
    component: ListUserAccountTypeComponent,
    path: "app-list-user-account-type"
  },
  {
    component: UserIncomeComponent,
    path: "app-user-income"
  },
  {
    component: ListUserIncomeComponent,
    path: "app-list-user-income"
  },
  {
    component: SignupComponent,
    path: ""
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
