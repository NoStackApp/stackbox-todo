import React from 'react';
interface FormProps {
    loading: boolean;
    currentUser?: any;
    login: (args: {
        username: string;
        password: string;
    }) => Promise<any>;
    submitButtonText?: string;
}
export declare const LoginForm: React.FunctionComponent<FormProps>;
export {};
//# sourceMappingURL=index.d.ts.map