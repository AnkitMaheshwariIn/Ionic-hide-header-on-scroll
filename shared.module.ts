import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './directives/hide-header.directive';


@NgModule({
    declarations: [HideHeaderDirective],
    exports: [HideHeaderDirective],
    imports: [
        CommonModule
    ]
})
export class SharedModule {}
