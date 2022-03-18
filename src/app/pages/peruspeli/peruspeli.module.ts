import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button'
import { OptionsComponent } from './components/options/options.component';
import { LottoSelectedComponent } from './components/lotto-selected/lotto-selected.component';
import { LottoSelectionPanelComponent } from './components/lotto-selection-panel/lotto-selection-panel.component';
import { PeruspeliComponent } from './peruspeli.component';
import { peruspeliRoutingModule } from './peruspeli-routing.module';
import { CustomInputComponent } from '../../components/shared/custom-input/custom-input.component';
import { CustomSelectComponent } from '../../components/shared/custom-select/custom-select.component';
import { LottoItemComponent } from 'src/app/components/shared/lotto-item/lotto-item.component';

@NgModule({
  declarations: [
    OptionsComponent,
    LottoSelectedComponent,
    LottoSelectionPanelComponent,
    PeruspeliComponent,
    CustomInputComponent,
    CustomSelectComponent,
    LottoItemComponent,
  ],
  imports: [
    CommonModule,
    peruspeliRoutingModule,
    MatButtonModule,
    FormsModule
  ]
})
export class PeruspeliModule { }
