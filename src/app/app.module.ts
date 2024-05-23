import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SuggestedProductsComponent } from './suggested-products/suggested-products.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TouchSliderComponent } from './touch-slider/touch-slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenProductsDirective } from './directives/open-products.directive';
import { OpenProductDetailsDirective } from './directives/open-product-details.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HttpErrorResponse, provideHttpClient, withFetch } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuggestedProductsComponent,
    HomeComponent,
    ProductsComponent,
    TouchSliderComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    OpenProductsDirective,
    OpenProductDetailsDirective,
    CarouselComponent,
    ContactUsComponent,
    ScrollAnimationDirective,
    RegisterComponent,
    LoginComponent,
    AboutUsComponent,
    OurServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:() => {
          return localStorage.getItem('user');
        },
        allowedDomains: ['https://localhost:7268'],
      },
    }),
  ],
  providers: [
  // provideClientHydration(),
  // provideAnimations(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
