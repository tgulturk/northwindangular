import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzNotificationModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule
  ],
  exports: [
    NzNotificationModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule
  ]
})
export class SharedModule { }
