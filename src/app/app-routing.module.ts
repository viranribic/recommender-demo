import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './auth/auth-guard.service';
import {HomeComponent} from './core/home/home.component';
import {RandomGalleryComponent} from './gallery/random-gallery/random-gallery.component';
import {LikedGalleryComponent} from './gallery/liked-gallery/liked-gallery.component';
import {RecommendedGalleryComponent} from './gallery/recommended-gallery/recommended-gallery.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
  { path: 'gallery', component: RandomGalleryComponent, canActivate: [AuthGuard], },
  { path: 'liked', component: LikedGalleryComponent, canActivate: [AuthGuard], },
  { path: 'recommended', component: RecommendedGalleryComponent, canActivate: [AuthGuard], },

];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes, {preloadingStrategy: PreloadAllModules} )],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
