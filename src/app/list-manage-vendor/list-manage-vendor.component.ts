import { Component } from '@angular/core';
import { ManageVendorService } from '../manage-vendor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-manage-vendor',
  templateUrl: './list-manage-vendor.component.html',
  styleUrls: ['./list-manage-vendor.component.css']
})
export class ListManageVendorComponent {
  constructor(private manageVendorService:ManageVendorService, private toasterService: ToastrService){}

  vendors=[]
  ngOnInit():void{
    this.manageVendorService.getAllVendor().subscribe({
      next:(resp)=>{
        this.vendors=resp;
        this.toasterService.success("All Vendor Details Fetched")

      }
    })
  }

  deleteVendor(vendorId:any){
    this.manageVendorService.deleteVendor(vendorId).subscribe({
      next:(resp)=>{
        this.vendors = this.vendors.filter(vendor=>vendor['vendorId']!=vendorId)
        this.toasterService.success("Vendor Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error("Vendor Not Deleted...!")
      }
    })
  }


}
