import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from 'src/app/shared-module/shared.module';

import { CreatePostComponent } from './create-post/create-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListHomeComponent } from './post-list-home/post-list-home.component';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { LikesDialogComponent } from './likes-dialog/likes-dialog.component';

@NgModule({
  declarations: [
    CreatePostComponent,
    PostListComponent,
    EditPostComponent,
    PostListHomeComponent,
    CommentsSectionComponent,
    LikesDialogComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [PostsRoutingModule, CreatePostComponent, PostListComponent],
  entryComponents: [LikesDialogComponent],
})
export class PostsModule {}
