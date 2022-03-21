import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ProfissionalComponent } from './page/profissional/profissional.component';
import { EstabelecimentoComponent } from './page/estabelecimento/estabelecimento.component';
import { ListarComponent } from './page/listar/listar.component';
import { MenuComponent } from './page/menu/menu.component';

import { ProfissionalService } from './profissional.service';
import { EstabelecimentoService } from './estabelecimento.service';
import { ListarService } from './listar.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfissionalComponent,
    EstabelecimentoComponent,
    ListarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [
    ProfissionalService,
    EstabelecimentoService,
    ListarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
