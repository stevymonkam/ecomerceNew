import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecomerce-new';

  constructor(private toastrService: ToastrService,private modalService: NgbModal){}

  hidden = false;

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
