import React, { ComponentType, FunctionComponent } from 'react';
import { ApolloClient } from 'apollo-client';
import { NormalizedCache } from 'apollo-cache-inmemory';
export interface User {
    id: string;
    username: string;
    role: string;
    accessToken: string;
}
export interface ContextInterface {
    platformId: string | null;
    currentUser: User | null;
    client?: ApolloClient<NormalizedCache>;
    loading: boolean;
    login({ username, password, }: {
        username: string;
        password: string;
    }): Promise<unknown> | void;
    logout(): void;
}
export declare const NoStackConsumer: FunctionComponent<{
    children: (context: ContextInterface) => React.ReactNode;
}>;
export interface ProviderProps {
    client: ApolloClient<NormalizedCache>;
    platformId: string | null;
    loginUser: (options: object) => Promise<any>;
}
export interface ProviderState {
    currentUser: User | null;
    loading: boolean;
}
export interface Response {
    ExecuteAction: string;
}
export interface Variables {
    actionId: string;
    executionParameters?: string;
    unrestricted: boolean;
}
export declare const NoStackProvider: FunctionComponent<{
    client: ApolloClient<NormalizedCache>;
    platformId: string;
    children: React.ReactNode;
}>;
export declare function withNoStack<Props>(WrappedComponent: ComponentType<Props & Partial<ContextInterface>>): FunctionComponent<Props>;
//# sourceMappingURL=index.d.ts.map