import { Component } from '@angular/core';
import { ManageVendorService } from '../manage-vendor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-vendor',
  templateUrl: './manage-vendor.component.html',
  styleUrls: ['./manage-vendor.component.css']
})
export class ManageVendorComponent {
  constructor(private manageVendorService:ManageVendorService,private router:Router, private toasterService: ToastrService){}

  vendorName:String=""

  addVendor(){
    console.log(this.vendorName);
    let vendor={"vendorName":this.vendorName}
    this.manageVendorService.addVendor(vendor).subscribe({
      next:(resp)=>{
        this.toasterService.success("Vendor Added Succesfully")
        this.router.navigateByUrl("/app-list-manage-vendor")
      },
      error:(error)=>{
        this.toasterService.error("Vendor Not Added")
      }
    })
    
  }


}
