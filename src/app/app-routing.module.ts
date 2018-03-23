import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GalleryComponent} from './gallery/gallery.component';
import {AuthGuard} from './auth/auth-guard.service';
import {RecommendedGalleryComponent} from './gallery/recommended-gallery/recommended-gallery.component';
import {LikedGalleryComponent} from './gallery/liked-gallery/liked-gallery.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'gallery', pathMatch: 'full'},
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard], },
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
