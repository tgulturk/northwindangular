import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzNotificationModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule
  ],
  exports: [
    NzNotificationModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule
  ]
})
export class SharedModule { }
