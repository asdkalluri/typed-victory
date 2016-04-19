/*
WARNING: PROJECT IN DEVELOPMENT
*/

// Type definitions for victory@0.6.0
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
    style?: ParentDataLabels<StyleInline>;
  }

  class VictoryChart extends React.Component<VictoryChartProps, void> {
  }

  /* VictoryLine */
  interface ParentDataLabels<T> {
    parent?: T;
    data?: T;
    labels?: T;
  }

  interface EventHandler {
    (event: Event, props: any[], index: number): void;
  }

  type Custom = any; // UNCLEAR
  type Shape = any; // UNCLEAR
  type ReactNode = any; // UNCLEAR
  type ReactElement = any; // UNCLEAR
  type StyleInline = any; // UNCLEAR
  type VictoryEvent = any; // UNCLEAR

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
  type ColorScale = string[] | 'greyscale' | 'qualitative' | 'heatmap' |
                    'warm' | 'cool' | 'red' | 'green' | 'blue';

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
    style?: ParentDataLabels<StyleInline>;
    events?: ParentDataLabels<VictoryEvent>;
    animate?: VictoryAnimationProps;
    categories?: string[] | PerAxis<string[]>;
  }

  class VictoryLine extends React.Component<VictoryLineProps, void> {
  }

  /* VictoryAxis */
  interface VictoryAxisProps {
    animate?: VictoryAnimationProps;
    crossAxis?: boolean;
    dependentAxis?: boolean;
    domain?: any; // TODO
    events?: any; // TODO
    height?: number;
    label?: any; // TODO
    offsetX?: number;
    offsetY?: number;
    orientation?: 'top' | 'bottom' | 'left' | 'right';
    padding?: Padding;
    scale?: Scale;
    standalone?: boolean;
    style?: any; // TODO
    tickCount?: any; // TODO
    tickFormat?: any; // TODO
    tickValues?: any; // TODO
    width?: number; // TODO
  }

  class VictoryAxis extends React.Component<VictoryAxisProps, void> {
  }

  /* VictoryStack 0.6.0, source ordered */
  class VictoryStack extends React.Component<VictoryStackProps, void> {
  }

  interface VictoryStackProps {
    animate?: VictoryAnimationProps;
    categories?: string[] | PerAxis<string[]>;
    children?: ReactNode | ReactNode[];
    colorScale?: ColorScale;
    domain?: number[] | PerAxis<number[]>; // Two unique
    domainPadding?: number | PerAxis<number>; // Non-negative
    height?: number; // Non-negative
    horizontal?: boolean;
    labels?: string[] | Function; // TODO: not specific enough
    labelComponent?: ReactElement;
    padding?: Padding;
    scale?: Scale | PerAxis<Scale>;
    standalone?: boolean;
    style?: ParentDataLabels<StyleInline>;
    width?: number; // Non-negative
    xOffset?: number;
  }

  /* VictoryArea 0.6.0, source ordered */
  class VictoryArea extends React.Component<VictoryAreaProps, void> {
  }

  interface VictoryAreaProps {
    animate?: VictoryAnimationProps;
    categories?: string[] | PerAxis<string[]>;
    data?: any[] | any[][]; // Is array of arrays still valid
    dataComponent?: React.ReactElement<DataComponentProps>;
    domain?: number[] | PerAxis<number[]>; // Two unique
    events?: ParentDataLabels<VictoryEvent>;
    height?: number; // Non-negative
    interpolation?: Interpolation;
    label?: string;
    labelComponent?: string | number | React.Component<void, void>; // UNCLEAR Label and too constrained now
    padding?: Padding;
    samples?: number; // Non-negative
    scale?: Scale | PerAxis<Scale>;
    standalone?: boolean;
    style?: ParentDataLabels<StyleInline>;
    width?: number; // Non-negative
    x?: DataAccessor;
    y?: DataAccessor;
  }

  interface DataComponentProps {
    data: any[];
    interpolation: Interpolation;
    scale: Scale | PerAxis<Scale>;
    style: any; // TODO
    events: any; // TODO
  }

  /* Victory Bar */
  interface VictoryBarProps {
    animate?: VictoryAnimationProps;
    data?: any[] | any[][];
    dataAttributes?: any; // UNCLEAR
    categories?: string[] | number[] | string[][] | number[][];
    colorScale?: string | string[]; // TODO: find builtin strings
    domain?: number[] | PerAxis<number[]>; // Two unique
    domainPadding?: number | PerAxis<number>; // Non-negative
    events?: ParentDataLabels<VictoryEvent>;
    grouped?: boolean;
    height?: number; // Non-negative
    horizontal?: boolean;
    labels?: string[]; // UNCLEAR
    labelComponent?: string | number | React.Component<void, void>; // UNCLEAR Label and too constrained now
    padding?: Padding;
    scale?: Scale | PerAxis<Scale>;
    stacked?: boolean;
    standalone?: boolean;
    style?: ParentDataLabels<StyleInline>;
    width?: number; // Non-negative
    x?: DataAccessor;
    y?: DataAccessor;
  }

  class VictoryBar extends React.Component<VictoryBarProps, void> {
  }
}

export = Victory;
