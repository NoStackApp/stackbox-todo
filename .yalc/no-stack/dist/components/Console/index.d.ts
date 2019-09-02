import { Component } from 'react';
export declare enum Position {
    left = 0,
    right = 1
}
export interface ConsoleProps {
    position: Position;
}
export interface ConsoleState {
    showConsole: boolean;
}
export declare class Console extends Component<ConsoleProps, ConsoleState> {
    readonly state: {
        showConsole: boolean;
    };
    static defaultProps: {
        position: string;
    };
    private handleButtonClick;
    handleHideConsole: () => void;
    render(): JSX.Element;
}
//# sourceMappingURL=index.d.ts.map