import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hidden = false;

  constructor(private toastrService: ToastrService,private modalService: NgbModal){}


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  public showSuccess(): void {
    this.toastrService.success('Contratti sucess!', 'Title Success!');
  }

  public showInfo(): void {
    this.toastrService.info('Message Info!', 'Title Info!');
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  public showError(): void {
    this.toastrService.error('Message Error!', 'Title Error!');
  }

 
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
