import { Component } from '@angular/core';
import { AddVendorService } from '../add-vendor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-add-vendor',
  templateUrl: './list-add-vendor.component.html',
  styleUrls: ['./list-add-vendor.component.css']
})
export class ListAddVendorComponent {

  constructor(private addVendorService:AddVendorService, private toasterService: ToastrService){}

  userVendors=[]
  ngOnInit():void{
    this.addVendorService.getAllUserVendor().subscribe({
      next:(resp)=>{
        this.userVendors=resp;
        this.toasterService.success("All User Vendor Details Fetched")

      }
    })
  }

  deleteUserVendor(userVendorId:any){
    this.addVendorService.deleteUserVendor(userVendorId).subscribe({
      next:(resp)=>{
        this.userVendors = this.userVendors.filter(userVendor=>userVendor['userVendorId']!=userVendorId)
        this.toasterService.success("User Vendor Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error("User Vendor Not Deleted...!")
      }
    })
  }

}
