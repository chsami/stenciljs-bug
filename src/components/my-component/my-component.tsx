import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';
import Konva from 'konva';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: Konva.Animation;

  /**
   * The last name
   */
  @Prop() last: string;

  private getStages() {
      return Konva.stages
  }

  private getText(): string {
    return format(this.first, '', this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getStages()} - {this.getText()}</div>;
  }
}
