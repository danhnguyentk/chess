import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ControlMessageComponent } from './components/control-message/control-message.component';
import { FocusDirective } from './directives/focus.directive';
import { InputWrapperComponent } from './components/input-wrapper/input-wrapper.component';
import { SearchTextComponent } from './components/search-text/search-text.component';
import { FormBuilderWrapper } from './services/form-builder-wrapper';
import { SuccessMessageComponent } from './components/success-message/success-message.component';
import { CustomValidator} from './services/custom-validator.service';
import { ValidationMessage} from './services/validation-message.service';

const COMPONENTS: any[] = [
  ErrorMessageComponent,
  ControlMessageComponent,
  InputWrapperComponent,
  SearchTextComponent,
  SuccessMessageComponent
];

const MODULES: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const DIRECTIVES: any[] = [
  FocusDirective
];

const SERVICES: any[] = [
  FormBuilderWrapper,
  CustomValidator,
  ValidationMessage
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
