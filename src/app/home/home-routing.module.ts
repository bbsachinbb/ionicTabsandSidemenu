import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'music',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../music/music.module').then(m => m.MusicPageModule)
          }
        ]
      },

      {
        path: 'video',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../video/video.module').then(m => m.VideoPageModule)
          }
        ]
      },


      {
        path: '',
        redirectTo: '/home/music',
        pathMatch: 'full'
      }
    ]
  },
     {
        path: '',
        redirectTo: '/home/video',
    pathMatch: 'full'
  
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
