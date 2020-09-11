import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
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
          redirectTo: '/tabs/video',
          pathMatch: 'full'
        }
      ]
    },
       {
          path: '',
          redirectTo: '/tabs/music',
      pathMatch: 'full'
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsPageRoutingModule {}