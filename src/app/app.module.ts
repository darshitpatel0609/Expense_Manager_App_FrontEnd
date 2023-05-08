import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListuserComponent } from './listuser/listuser.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ListSubcategoryComponent } from './list-subcategory/list-subcategory.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ListManageuserComponent } from './list-manageuser/list-manageuser.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';
import { ListManageVendorComponent } from './list-manage-vendor/list-manage-vendor.component';
import { ManageExpenseComponent } from './manage-expense/manage-expense.component';
import { ListExpenseComponent } from './list-expense/list-expense.component';
import { AccounttypeComponent } from './accounttype/accounttype.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ListIncomeComponent } from './list-income/list-income.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCategoryComponent } from './user-category/user-category.component';
import { UserSubCategoryComponent } from './user-sub-category/user-sub-category.component';
import { ListUserSubCategoryComponent } from './list-user-sub-category/list-user-sub-category.component';
import { ListUserCategoryComponent } from './list-user-category/list-user-category.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListAddVendorComponent } from './list-add-vendor/list-add-vendor.component';
import { UserExpenseComponent } from './user-expense/user-expense.component';
import { ListUserExpenseComponent } from './list-user-expense/list-user-expense.component';
import { UserAccountTypeComponent } from './user-account-type/user-account-type.component';
import { ListUserAccountTypeComponent } from './list-user-account-type/list-user-account-type.component';
import { UserIncomeComponent } from './user-income/user-income.component';
import { ListUserIncomeComponent } from './list-user-income/list-user-income.component';
// import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ListuserComponent,
    ForgetPasswordComponent,
    LoginComponent,
    ResetPasswordComponent,
    ManageCategoryComponent,
    ListCategoryComponent,
    SubCategoryComponent,
    ListSubcategoryComponent,
    ManageUserComponent,
    ListManageuserComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ManageVendorComponent,
    ListManageVendorComponent,
    ManageExpenseComponent,
    ListExpenseComponent,
    AccounttypeComponent,
    ListAccountComponent,
    HomeDashboardComponent,
    IncomeComponent,
    ListIncomeComponent,
    DashboardComponent,
    UserCategoryComponent,
    UserSubCategoryComponent,
    ListUserSubCategoryComponent,
    ListUserCategoryComponent,
    AddVendorComponent,
    ListAddVendorComponent,
    UserExpenseComponent,
    ListUserExpenseComponent,
    UserAccountTypeComponent,
    ListUserAccountTypeComponent,
    UserIncomeComponent,
    ListUserIncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000
    }),
    BrowserAnimationsModule
  ],
  // providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
