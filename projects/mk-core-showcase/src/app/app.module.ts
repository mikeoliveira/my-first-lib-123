import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { MkCoreSampleComponent } from '../../../mk-core/src/lib/sample.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HighlightModule, MkCoreSampleComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: async () => await import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
