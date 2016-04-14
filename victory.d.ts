// Type definitions for victory
// Project: https://github.com/FormidableLabs/victory
// Definitions by: Alex Pyzhianov <https://github.com/SereznoKot>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare namespace Victory {
  import React = __React;

  /* Common */
  interface PerAxis<T> {
    x?: T;
    y?: T;
  }

  interface ScaleFunction { // Unclear, see d3 typings
    copy: Function;
    domain: Function;
    range: Function;
  }

  type Padding = number | { top?: number, bottom?: number, left?: number, right?: number }; // UNCLEAR Maybe not optional

  /* VictoryAnimate */
  interface VictoryAnimationProps {
    // children: ???
    duration?: number;
    easing?: Easing;
    delay?: number;
    onEnd?: Function;
    data?: any[]; // UNCLEAR
  }

  class VictoryAnimation extends React.Component<VictoryAnimationProps, void> {
  }

  /* VictoryChart */
  interface VictoryChartProps {
    animate?: VictoryAnimationProps;
    children?: ReactNode | ReactNode[];
    domain?: number[] | PerAxis<number[]>; // Two unique
    domainPadding?: number | PerAxis<number>; // Non-negative
    events?: any; // UNCLEAR
    width?: number; // Non-negative
    height?: number; // Non-negative
    padding?: Padding;
    scale?: Scale | PerAxis<Scale>;
    standalone?: boolean;
    style?: ParentDataLabel;
  }

  class VictoryChart extends React.Component<VictoryChartProps, void> {
  }

  /* VictoryLine */
  interface ParentDataLabel {
    parent: React.Component<void, void>; // UNCLEAR
    data: React.Component<void, void>; // UNCLEAR
    labels: React.Component<void, void>; // UNCLEAR
  }

  interface EventHandler {
    (event: Event, props: any[], index: number): void;
  }

  type Custom = any; // UNCLEAR
  type Shape = any; // UNCLEAR
  type ReactNode = any; // UNCLEAR

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

  type Scale = 'linear' | 'time' | 'log' | 'sqrt' | ScaleFunction;

  type DataAccessor = string | string[] | ((data: any[]) => number) | number; // integer non-negative


  interface VictoryLineProps {
    data?: any[];
    dataComponent?: React.Component<VictoryLineProps, void>; // Prop unclear
    x?: DataAccessor;
    y?: DataAccessor;
    domain?: number[] | PerAxis<number[]>; // Two unique
    padding?: Padding;
    width?: number; // Non-negative
    height?: number; // Non-negative
    samples?: number; // Non-negative
    interpolation?: Interpolation;
    scale?: Scale | PerAxis<Scale>;
    label?: string | number | React.Component<void, void>; // UNCLEAR Label and too constrained now
    standalone?: boolean;
    style?: ParentDataLabel;
    events?: ParentDataLabel;
    animate?: VictoryAnimationProps;
    categories?: string[] | PerAxis<string[]>;
  }

  class VictoryLine extends React.Component<VictoryLineProps, void> {
  }
}

export = Victory;
