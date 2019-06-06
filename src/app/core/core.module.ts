import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsService } from './services/posts.service';

@NgModule({
  imports: [CommonModule],
  providers: [PostsService],
  declarations: []
})
export class CoreModule {
}
