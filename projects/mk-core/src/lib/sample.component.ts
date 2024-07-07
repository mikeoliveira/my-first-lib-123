import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MkCoreSampleService } from './core/services/sample.service';

@Component({
  selector: 'mk-core-sample',
  template: `<h1>
    The best framework is {{ sampleService.getBestFramework() }}
  </h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MkCoreSampleComponent {
  constructor(public sampleService: MkCoreSampleService) {}
}
