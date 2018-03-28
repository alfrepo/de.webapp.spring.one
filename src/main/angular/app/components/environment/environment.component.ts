import {Component} from '@angular/core';
import {EnvironmentService} from "./environment.service";
import {Variable} from "./variable";

@Component({
  selector: 'chat-messages',
  templateUrl: 'environment.component.html',
  providers: [EnvironmentService],
})
export class EnvironmentComponent {
  public variables: Variable[];

  constructor(private environmentService: EnvironmentService) {
  }

  ngOnInit() {
    this.environmentService.getVariables()
      .subscribe(
        (variables: Variable[]) => this.variables = variables,
        error => console.error(''));
  }
}
