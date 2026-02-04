import { Component, inject, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfiguracionPopup } from '../../interfaces/configuracionPopup';

@Component({
  selector: 'app-confirmar-popup',
  templateUrl: './confirmar-popup.html',
  styleUrl: './confirmar-popup.css',
  standalone: true,
  imports: [ButtonModule, ConfirmPopupModule, ToastModule],
  providers: [ConfirmationService, MessageService],
})
export class ConfirmarPopup {
  @Input() config!: ConfiguracionPopup;

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: this.config.message, 
      header: this.config.header,
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: this.config.nameButton,
        severity: this.config.severity,
      },
      accept: () => {
        if (this.config.accion) {
          this.config.accion();
        }
        
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Operación realizada con éxito',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Cancelado',
          detail: 'Has cancelado la acción',
          life: 3000,
        });
      },
    });
  }
}
