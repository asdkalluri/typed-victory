// Type definitions for victory
// Project: https://github.com/FormidableLabs/victory
// Definitions by: Alex Pyzhianov <https://github.com/SereznoKot>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare namespace Victory {
  import React = __React;
  /* VictoryAnimate */
  interface VictoryAnimationProps {
    // children: ???
    duration?: number;
    easing?: Easing;
    delay?: number;
    onEnd?: Function;
    data?: any[]; // UNCLEAR
  }

  class VictoryAnimation extends React.Component<VictoryAnimationProps, any> {
  }

  /* VictoryLine */
  interface Stack {
    parent: any; // UNCLEAR
    data: any; // UNCLEAR
    labels: any; // UNCLEAR
  }

  interface EventHandler {
    (event: Event, props: any[], index: number): void;
  }

  type Custom = any; // UNCLEAR
  type Shape = any; // UNCLEAR

  type Easing =
      'back' | 'backIn' | 'backOut' | 'backInOut' | 'bounce' | 'bounceIn' |
      'bounceOut' | 'bounceInOut' | 'circle' | 'circleIn' | 'circleOut' |
      'circleInOut' | 'linear' | 'linearIn' | 'linearOut' | 'linearInOut' |
      'cubic' | 'cubicIn' | 'cubicOut' | 'cubicInOut' | 'elastic' |
      'elasticIn' | 'elasticOut' | 'elasticInOut' | 'exp' | 'expIn' |
      'expOut' | 'expInOut' | 'poly' | 'polyIn' | 'polyOut' | 'polyInOut' |
      'quad' | 'quadIn' | 'quadOut' | 'quadInOut' | 'sin' | 'sinIn' |
      'sinOut' | 'sinInOut';

  type Interpolation =
      'basis' | 'basisClosed' | 'basisOpen' | 'bundle' |
      'cardinal' | 'cardinalClosed' | 'cardinalOpen' |
      'catmullRom' | 'catmullRomClosed' | 'catmullRomOpen' |
      'linear' | 'linearClosed' | 'monotoneX' | 'monotoneY' |
      'natural' | 'radial' | 'step' | 'stepAfter' | 'stepBefore';

  type DataAccessor = string | string[] | ((data: any[]) => number) | Custom;

  interface VictoryLineProps {
    data?: any[];
    x?: DataAccessor;
    y?: DataAccessor;
    domain?: Custom|Shape;
    padding?: number|Shape;
    width?: Custom;
    height?: Custom;
    samples?: Custom;
    interpolation?: Interpolation;
    scale?: Custom|Shape;
    label?: any; // UNCLEAR
    standalone?: boolean;
    style?: Stack;
    events?: Stack;
    animate?: VictoryAnimationProps;
  }

  class VictoryLine extends React.Component<VictoryLineProps, any> {
  }
}

export = Victory;
