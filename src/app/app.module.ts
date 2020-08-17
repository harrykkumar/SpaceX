import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceService} from './space.service';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent  ],
  providers: [SpaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
