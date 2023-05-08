import { Component } from '@angular/core';
import { AddVendorService } from '../add-vendor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent {

  constructor(private addVendorService:AddVendorService,private router:Router, private toasterService: ToastrService){}

  userVendorName:String=""

  addUserVendor(){
    console.log(this.userVendorName);
    let userVendor={"userVendorName":this.userVendorName}
    this.addVendorService.addUserVendor(userVendor).subscribe({
      next:(resp)=>{
        this.toasterService.success("User Vendor Added Succesfully")
        this.router.navigateByUrl("/app-list-add-vendor")
      },
      error:(error)=>{
        this.toasterService.error("User Vendor Not Added")
      }
    })
    
  }

}
