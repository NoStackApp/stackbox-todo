import { Component } from 'react';
declare enum modes {
    CREATE_NEW = 0,
    ADD_EXISTING = 1
}
export interface CreateFirstTypeProps {
    treeId: string;
}
export interface CreateFirstTypeState {
    mode: modes | null;
}
declare class CreateFirstType extends Component<CreateFirstTypeProps, CreateFirstTypeState> {
    readonly state: {
        mode: null;
    };
    render(): JSX.Element;
}
export default CreateFirstType;
//# sourceMappingURL=index.d.ts.map