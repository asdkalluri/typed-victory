// Type definitions for victory
// Project: https://github.com/FormidableLabs/victory
// Definitions by: Alex Pyzhianov <https://github.com/SereznoKot>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import * as React from 'react';

declare namespace Victory {
  interface VictoryLineProps {
    height: number,
    interpolation: string,
    padding: number,
    samples: number,
    scale: string,
    standalone: boolean,
    width: number,
    x: string,
    y: string
  }

  class VictoryLine extends React.Component<VictoryLineProps, any> {
  }
}

export = Victory;
