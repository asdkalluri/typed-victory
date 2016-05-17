/*
WARNING: PROJECT IN DEVELOPMENT
*/

// Type definitions for victory@0.6.0
// Project: https://github.com/FormidableLabs/victory
// Definitions by: Alex Pyzhianov <https://github.com/SereznoKot>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare namespace Victory {
  import React = __React;

  type Custom = any; // UNCLEAR
  type Shape = any; // UNCLEAR
  type ReactNode = any; // UNCLEAR
  type ReactElement = any; // UNCLEAR
  type StyleInline = any; // UNCLEAR
  type VictoryEvent = any; // UNCLEAR
  type Transform = any;

  /* Common */
  interface PerAxis<T> {
    x?: T;
    y?: T;
  }

  interface ParentDataLabels<T> {
    parent?: T;
    data?: T;
    labels?: T;
  }

  interface DataComponentProps {
    data: any[];
    interpolation: Interpolation;
    scale: Scale | PerAxis<Scale>;
    style: any; // TODO
    events: any; // TODO
  }

  interface EventHandler {
    (event: Event, props: any[], index: number): void;
  }

  type ScaleFunction = Function; // specify further

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
  type Padding = number | SidesPadding;

  interface SidesPadding {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  /* VictoryAnimate */
  class VictoryAnimation extends React.Component<VictoryAnimationProps, void> {
  }

  interface VictoryAnimationProps {
    // children: ???
    duration?: number;
    easing?: Easing;
    delay?: number;
    onEnd?: Function;
    data?: any[]; // UNCLEAR
  }

  /* VictoryLabel */
  class VictoryLabel extends React.Component<VictoryLabelProps, void> {
  }

  interface VictoryLabelProps {
    angle?: string | number;
    capHeight?: string | number | Function;
    datum?: any;
    data?: any[];
    events?: VictoryEvent;
    text?: string | number | Function;
    children?: string | number | Function;
    lineHeight?: string | number | Function;
    style?: StyleInline;
    textAnchor?: 'start' | 'middle' | 'end' | 'inherit' | Function;
    verticalAnchor?: 'start' | 'middle' | 'end' | Function;
    transform?: string | Transform | Function; // UNCLEAR
    x?: number;
    y?: number;
    dx?: number | string | Function;
    dy?: number | string | Function;
  }

  /* VictoryChart */
  class VictoryChart extends React.Component<VictoryChartProps, void> {
  }

  interface VictoryChartProps {
    animate?: VictoryAnimationProps;
    children?: ReactNode | ReactNode[];
    domain?: any[] | PerAxis<any[]>; // Two unique
    domainPadding?: number | PerAxis<number>; // Non-negative
    events?: any; // UNCLEAR
    width?: number; // Non-negative
    height?: number; // Non-negative
    padding?: Padding;
    scale?: Scale | PerAxis<Scale>;
    standalone?: boolean;
    style?: ParentDataLabels<StyleInline>;
  }

  /* VictoryLine 0.7.0, source ordered */
  class VictoryLine extends React.Component<VictoryLineProps, void> {
  }

  interface VictoryLineProps {
    animate?: VictoryAnimationProps;
    categories?: string[] | PerAxis<string[]>;
    data?: any[];
    dataComponent?: React.ReactElement<DataComponentProps>;
    domain?: any[] | PerAxis<any[]>; // Two unique
    events?: ParentDataLabels<VictoryEvent>;
    height?: number; // Non-negative
    interpolation?: Interpolation;
    label?: string | number; // UNCLEAR Label and too constrained now
    labelComponent?: React.ReactElement<any>;
    padding?: Padding;
    samples?: number; // Non-negative
    scale?: Scale | PerAxis<Scale>;
    standalone?: boolean;
    style?: ParentDataLabels<StyleInline>;
    width?: number; // Non-negative
    x?: DataAccessor;
    y?: DataAccessor;
  }

  /* VictoryAxis 0.6.0 source ordered */
  class VictoryAxis extends React.Component<VictoryAxisProps, void> {
  }

  interface VictoryAxisProps {
    animate?: VictoryAnimationProps;
    axisComponent?: React.ReactElement<any>;
    axisLabelComponent?: React.ReactElement<any>;
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
    tickComponent?: React.ReactElement<any>;
    tickCount?: any; // TODO
    tickLabelComponent?: React.ReactElement<any>;
    tickFormat?: any; // TODO
    tickValues?: any; // TODO
    width?: number; // TODO
  }

  /* VictoryStack 0.6.0, source ordered */
  class VictoryStack extends React.Component<VictoryStackProps, void> {
  }

  interface VictoryStackProps {
    animate?: VictoryAnimationProps;
    categories?: string[] | PerAxis<string[]>;
    children?: ReactNode | ReactNode[];
    colorScale?: ColorScale;
    domain?: any[] | PerAxis<any[]>; // Two unique
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
    domain?: any[] | PerAxis<any[]>; // Two unique
    events?: ParentDataLabels<VictoryEvent>;
    height?: number; // Non-negative
    interpolation?: Interpolation;
    label?: string;
    labelComponent?: string | number | React.ReactElement<any>; // UNCLEAR Label and too constrained now
    padding?: Padding;
    samples?: number; // Non-negative
    scale?: Scale | PerAxis<Scale>;
    standalone?: boolean;
    style?: ParentDataLabels<StyleInline>;
    width?: number; // Non-negative
    x?: DataAccessor;
    y?: DataAccessor;
  }

  /* Victory Bar */
  class VictoryBar extends React.Component<VictoryBarProps, void> {
  }

  interface VictoryBarProps {
    animate?: VictoryAnimationProps;
    data?: any[] | any[][];
    dataAttributes?: any; // UNCLEAR
    categories?: string[] | number[] | string[][] | number[][];
    colorScale?: string | string[]; // TODO: find builtin strings
    domain?: any[] | PerAxis<any[]>; // Two unique
    domainPadding?: number | PerAxis<number>; // Non-negative
    events?: ParentDataLabels<VictoryEvent>;
    grouped?: boolean;
    height?: number; // Non-negative
    horizontal?: boolean;
    labels?: string[]; // UNCLEAR
    labelComponent?: string | number | React.ReactElement<any>; // UNCLEAR Label and too constrained now
    padding?: Padding;
    scale?: Scale | PerAxis<Scale>;
    stacked?: boolean;
    standalone?: boolean;
    style?: ParentDataLabels<StyleInline>;
    width?: number; // Non-negative
    x?: DataAccessor;
    y?: DataAccessor;
  }
}

export = Victory;
