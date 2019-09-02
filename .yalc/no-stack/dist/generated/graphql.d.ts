import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export declare type Maybe<T> = T | null;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Upload: any;
};
export declare enum _ActionOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _AssnOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    MultipleAsc = "multiple_asc",
    MultipleDesc = "multiple_desc",
    SortedAsc = "sorted_asc",
    SortedDesc = "sorted_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _CollectionOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    RestrictedAsc = "restricted_asc",
    RestrictedDesc = "restricted_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _ConstraintOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    ValueAsc = "value_asc",
    ValueDesc = "value_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _ContainerOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _CurrencyOrdering {
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    SymbolAsc = "symbol_asc",
    SymbolDesc = "symbol_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _ElementMapOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    IAsc = "i_asc",
    IDesc = "i_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _ElementOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    IAsc = "i_asc",
    IDesc = "i_desc",
    ImageAsc = "image_asc",
    ImageDesc = "image_desc",
    TextAsc = "text_asc",
    TextDesc = "text_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _ExecutionOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _FeeOrdering {
    ValueAsc = "value_asc",
    ValueDesc = "value_desc",
    FrequencyAsc = "frequency_asc",
    FrequencyDesc = "frequency_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _FileOrdering {
    FilenameAsc = "filename_asc",
    FilenameDesc = "filename_desc",
    MimetypeAsc = "mimetype_asc",
    MimetypeDesc = "mimetype_desc",
    EncodingAsc = "encoding_asc",
    EncodingDesc = "encoding_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _FormatOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    JsonAsc = "json_asc",
    JsonDesc = "json_desc",
    LayoutsAsc = "layouts_asc",
    LayoutsDesc = "layouts_desc",
    BackgroundColorAsc = "background_color_asc",
    BackgroundColorDesc = "background_color_desc",
    BorderColorAsc = "border_color_asc",
    BorderColorDesc = "border_color_desc",
    BorderThicknessAsc = "border_thickness_asc",
    BorderThicknessDesc = "border_thickness_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _FormOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    ConstraintsAsc = "constraints_asc",
    ConstraintsDesc = "constraints_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _InstanceAssnOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    OrderAsc = "order_asc",
    OrderDesc = "order_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _InstanceOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    ValueAsc = "value_asc",
    ValueDesc = "value_desc",
    OrderAsc = "order_asc",
    OrderDesc = "order_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _InstanceWithChildrenOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    TypeAsc = "type_asc",
    TypeDesc = "type_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _ModeratorOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NoStackIdAsc = "noStackId_asc",
    NoStackIdDesc = "noStackId_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    FirstNameAsc = "firstName_asc",
    FirstNameDesc = "firstName_desc",
    LastNameAsc = "lastName_asc",
    LastNameDesc = "lastName_desc",
    EmailAsc = "email_asc",
    EmailDesc = "email_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _PageOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    ContentsAsc = "contents_asc",
    ContentsDesc = "contents_desc",
    RestrictedAsc = "restricted_asc",
    RestrictedDesc = "restricted_desc",
    CssAsc = "css_asc",
    CssDesc = "css_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _PlatformOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    ClientIdAsc = "clientId_asc",
    ClientIdDesc = "clientId_desc",
    PaidThroughAsc = "paidThrough_asc",
    PaidThroughDesc = "paidThrough_desc",
    PaymentIdAsc = "paymentId_asc",
    PaymentIdDesc = "paymentId_desc",
    HeaderAsc = "header_asc",
    HeaderDesc = "header_desc",
    FooterAsc = "footer_asc",
    FooterDesc = "footer_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _SortingOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    OrderAsc = "order_asc",
    OrderDesc = "order_desc",
    DirectionAsc = "direction_asc",
    DirectionDesc = "direction_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _SourceOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    HasValueAsc = "has_value_asc",
    HasValueDesc = "has_value_desc",
    IsMultipleAsc = "is_multiple_asc",
    IsMultipleDesc = "is_multiple_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _SparkletOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    HasValueAsc = "has_value_asc",
    HasValueDesc = "has_value_desc",
    IsMultipleAsc = "is_multiple_asc",
    IsMultipleDesc = "is_multiple_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _TreeOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _TypeOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    HasValueAsc = "hasValue_asc",
    HasValueDesc = "hasValue_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _UserClassOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare enum _UserOrdering {
    IdAsc = "id_asc",
    IdDesc = "id_desc",
    NameAsc = "name_asc",
    NameDesc = "name_desc",
    FirstNameAsc = "firstName_asc",
    FirstNameDesc = "firstName_desc",
    LastNameAsc = "lastName_asc",
    LastNameDesc = "lastName_desc",
    PaymentIdAsc = "paymentId_asc",
    PaymentIdDesc = "paymentId_desc",
    PaidThroughAsc = "paidThrough_asc",
    PaidThroughDesc = "paidThrough_desc",
    EmailAsc = "email_asc",
    EmailDesc = "email_desc",
    LevelAsc = "level_asc",
    LevelDesc = "level_desc",
    IdAsc = "_id_asc",
    IdDesc = "_id_desc"
}
export declare type Action = {
    __typename?: 'Action';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    actionType?: Maybe<ActionType>;
    userClass?: Maybe<UserClass>;
    objectType?: Maybe<Type>;
    assn?: Maybe<Assn>;
    _id?: Maybe<Scalars['Int']>;
};
export declare enum ActionType {
    Upload = "UPLOAD",
    ApproveUpload = "APPROVE_UPLOAD",
    Contact = "CONTACT",
    Invite = "INVITE",
    AcceptInvitation = "ACCEPT_INVITATION",
    FirstLogin = "FIRST_LOGIN",
    Respond = "RESPOND",
    Notify = "NOTIFY",
    Follow = "FOLLOW",
    Pay = "PAY",
    Buy = "BUY",
    Rent = "RENT",
    Post = "POST",
    RequestNewPassword = "REQUEST_NEW_PASSWORD",
    SetPassword = "SET_PASSWORD",
    Login = "LOGIN",
    RefreshUserToken = "REFRESH_USER_TOKEN",
    VerifyUserToken = "VERIFY_USER_TOKEN",
    CreateInstance = "CREATE_INSTANCE",
    CreateInstanceWithoutParent = "CREATE_INSTANCE_WITHOUT_PARENT",
    CreatePublicInstance = "CREATE_PUBLIC_INSTANCE",
    CreateInstanceAssn = "CREATE_INSTANCE_ASSN",
    CallExternalApi = "CALL_EXTERNAL_API",
    UpdateInstance = "UPDATE_INSTANCE",
    DeleteInstance = "DELETE_INSTANCE"
}
export declare type Assn = {
    __typename?: 'Assn';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    types?: Maybe<Array<Maybe<Type>>>;
    multiple?: Maybe<Scalars['Boolean']>;
    sorted?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type AssnTypesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_TypeOrdering>;
};
export declare type Collection = {
    __typename?: 'Collection';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    sources?: Maybe<Array<Maybe<Source>>>;
    restricted?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type CollectionSourcesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_SourceOrdering>;
};
export declare type Constraint = {
    __typename?: 'Constraint';
    id: Scalars['ID'];
    value?: Maybe<Scalars['String']>;
    constrainttype?: Maybe<ConstraintType>;
    type?: Maybe<Type>;
    source?: Maybe<Source>;
    _id?: Maybe<Scalars['Int']>;
};
export declare enum ConstraintType {
    Id = "ID",
    Value = "VALUE"
}
export declare type Container = {
    __typename?: 'Container';
    id: Scalars['ID'];
    format?: Maybe<Format>;
    element_maps?: Maybe<Array<Maybe<ElementMap>>>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type ContainerElement_MapsArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ElementMapOrdering>;
};
export declare type Currency = {
    __typename?: 'Currency';
    name?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
};
export declare enum DataType {
    Text = "TEXT",
    Image = "IMAGE",
    Url = "URL",
    Number = "NUMBER",
    User = "USER"
}
export declare type Element = {
    __typename?: 'Element';
    id: Scalars['ID'];
    i: Scalars['ID'];
    element_type?: Maybe<ElementType>;
    sparklet?: Maybe<Sparklet>;
    image?: Maybe<Scalars['String']>;
    text?: Maybe<Scalars['String']>;
    container?: Maybe<Container>;
    form?: Maybe<Form>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type ElementMap = {
    __typename?: 'ElementMap';
    id: Scalars['ID'];
    element?: Maybe<Element>;
    i: Scalars['ID'];
    _id?: Maybe<Scalars['Int']>;
};
export declare enum ElementType {
    Sparklet = "SPARKLET",
    Image = "IMAGE",
    Text = "TEXT",
    Container = "CONTAINER",
    Form = "FORM"
}
export declare type Execution = {
    __typename?: 'Execution';
    id: Scalars['ID'];
    action?: Maybe<Action>;
    performer?: Maybe<User>;
    recipient?: Maybe<User>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type Fee = {
    __typename?: 'Fee';
    value?: Maybe<Scalars['Int']>;
    currency?: Maybe<Currency>;
    frequency?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type File = {
    __typename?: 'File';
    filename: Scalars['String'];
    mimetype: Scalars['String'];
    encoding: Scalars['String'];
    _id?: Maybe<Scalars['Int']>;
};
export declare type Form = {
    __typename?: 'Form';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    tree?: Maybe<Tree>;
    constraints?: Maybe<Scalars['String']>;
    container?: Maybe<Container>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type Format = {
    __typename?: 'Format';
    id: Scalars['ID'];
    json?: Maybe<Scalars['String']>;
    layouts?: Maybe<Scalars['String']>;
    background_color?: Maybe<Scalars['String']>;
    border_color?: Maybe<Scalars['String']>;
    border_thickness?: Maybe<Scalars['Int']>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type Instance = {
    __typename?: 'Instance';
    id: Scalars['ID'];
    value?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Float']>;
    type?: Maybe<Type>;
    instanceAssns?: Maybe<Array<Maybe<InstanceAssn>>>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type InstanceInstanceAssnsArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_InstanceAssnOrdering>;
};
export declare type InstanceAssn = {
    __typename?: 'InstanceAssn';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    assn?: Maybe<Assn>;
    instances?: Maybe<Array<Maybe<Instance>>>;
    order?: Maybe<Scalars['Float']>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type InstanceAssnInstancesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_InstanceOrdering>;
};
export declare type InstanceWithChildren = {
    __typename?: 'InstanceWithChildren';
    id: Scalars['ID'];
    type?: Maybe<Scalars['ID']>;
    instance?: Maybe<Instance>;
    children?: Maybe<Array<Maybe<InstanceWithChildren>>>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type Moderator = {
    __typename?: 'Moderator';
    id: Scalars['ID'];
    noStackId?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    identities?: Maybe<Array<Maybe<User>>>;
    owns?: Maybe<Array<Maybe<Platform>>>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type ModeratorIdentitiesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_UserOrdering>;
};
export declare type ModeratorOwnsArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_PlatformOrdering>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    SingleUpload: File;
    AddToTree?: Maybe<Tree>;
    CreateUserClass?: Maybe<UserClass>;
    AddType?: Maybe<Type>;
    AddRootType?: Maybe<Type>;
    AddAssn?: Maybe<Assn>;
    RemoveType?: Maybe<Scalars['String']>;
    MoveType?: Maybe<Tree>;
    CreatePlatform?: Maybe<Platform>;
    CreateUserOnPlatform?: Maybe<User>;
    CreateAction?: Maybe<Action>;
    CreateModerator?: Maybe<Moderator>;
    AddUserPlatform?: Maybe<Platform>;
    ExecuteAction?: Maybe<Scalars['String']>;
    AddInstance?: Maybe<Instance>;
    AddCollection?: Maybe<Collection>;
    RemoveInstance?: Maybe<Scalars['String']>;
    BuildStackFromTemplate?: Maybe<Scalars['String']>;
    CreatePage?: Maybe<Page>;
    UpdatePage?: Maybe<Page>;
    DeletePage?: Maybe<Page>;
    AddPageContainer?: Maybe<Page>;
    RemovePageContainer?: Maybe<Page>;
    CreateContainer?: Maybe<Container>;
    DeleteContainer?: Maybe<Container>;
    AddContainerFormat?: Maybe<Container>;
    RemoveContainerFormat?: Maybe<Container>;
    AddContainerElement_maps?: Maybe<Container>;
    RemoveContainerElement_maps?: Maybe<Container>;
    CreateFormat?: Maybe<Format>;
    UpdateFormat?: Maybe<Format>;
    DeleteFormat?: Maybe<Format>;
    CreateElementMap?: Maybe<ElementMap>;
    UpdateElementMap?: Maybe<ElementMap>;
    DeleteElementMap?: Maybe<ElementMap>;
    AddElementMapElement?: Maybe<ElementMap>;
    RemoveElementMapElement?: Maybe<ElementMap>;
    CreateElement?: Maybe<Element>;
    UpdateElement?: Maybe<Element>;
    DeleteElement?: Maybe<Element>;
    AddElementSparklet?: Maybe<Element>;
    RemoveElementSparklet?: Maybe<Element>;
    AddElementContainer?: Maybe<Element>;
    RemoveElementContainer?: Maybe<Element>;
    AddElementForm?: Maybe<Element>;
    RemoveElementForm?: Maybe<Element>;
    CreateSparklet?: Maybe<Sparklet>;
    UpdateSparklet?: Maybe<Sparklet>;
    DeleteSparklet?: Maybe<Sparklet>;
    AddSparkletPage?: Maybe<Sparklet>;
    RemoveSparkletPage?: Maybe<Sparklet>;
    AddSparkletTypes?: Maybe<Sparklet>;
    RemoveSparkletTypes?: Maybe<Sparklet>;
    AddSparkletTree?: Maybe<Sparklet>;
    RemoveSparkletTree?: Maybe<Sparklet>;
    AddSparkletTemplate?: Maybe<Sparklet>;
    RemoveSparkletTemplate?: Maybe<Sparklet>;
    CreateType?: Maybe<Type>;
    UpdateType?: Maybe<Type>;
    DeleteType?: Maybe<Type>;
    AddTypePlatform?: Maybe<Type>;
    RemoveTypePlatform?: Maybe<Type>;
    AddTypeAssns?: Maybe<Type>;
    RemoveTypeAssns?: Maybe<Type>;
    UpdatePlatform?: Maybe<Platform>;
    DeletePlatform?: Maybe<Platform>;
    AddPlatformModerators?: Maybe<Platform>;
    RemovePlatformModerators?: Maybe<Platform>;
    UpdateUserClass?: Maybe<UserClass>;
    DeleteUserClass?: Maybe<UserClass>;
    AddUserClassFee?: Maybe<UserClass>;
    RemoveUserClassFee?: Maybe<UserClass>;
    AddUserClassPages?: Maybe<UserClass>;
    RemoveUserClassPages?: Maybe<UserClass>;
    AddUserClassCollection?: Maybe<UserClass>;
    RemoveUserClassCollection?: Maybe<UserClass>;
    AddUserClassPlatform?: Maybe<UserClass>;
    RemoveUserClassPlatform?: Maybe<UserClass>;
    AddUserClassPermittedTypes?: Maybe<UserClass>;
    RemoveUserClassPermittedTypes?: Maybe<UserClass>;
    CreateFee?: Maybe<Fee>;
    UpdateFee?: Maybe<Fee>;
    DeleteFee?: Maybe<Fee>;
    AddFeeCurrency?: Maybe<Fee>;
    RemoveFeeCurrency?: Maybe<Fee>;
    CreateCurrency?: Maybe<Currency>;
    UpdateCurrency?: Maybe<Currency>;
    DeleteCurrency?: Maybe<Currency>;
    CreateCollection?: Maybe<Collection>;
    UpdateCollection?: Maybe<Collection>;
    DeleteCollection?: Maybe<Collection>;
    CreateSource?: Maybe<Source>;
    UpdateSource?: Maybe<Source>;
    DeleteSource?: Maybe<Source>;
    AddSourceCollection?: Maybe<Source>;
    RemoveSourceCollection?: Maybe<Source>;
    AddSourceTypes?: Maybe<Source>;
    RemoveSourceTypes?: Maybe<Source>;
    AddSourceTree?: Maybe<Source>;
    RemoveSourceTree?: Maybe<Source>;
    AddSourceTemplate?: Maybe<Source>;
    RemoveSourceTemplate?: Maybe<Source>;
    CreateTree?: Maybe<Tree>;
    UpdateTree?: Maybe<Tree>;
    DeleteTree?: Maybe<Tree>;
    AddTreeRoot?: Maybe<Tree>;
    RemoveTreeRoot?: Maybe<Tree>;
    AddTreeAssns?: Maybe<Tree>;
    RemoveTreeAssns?: Maybe<Tree>;
    CreateAssn?: Maybe<Assn>;
    UpdateAssn?: Maybe<Assn>;
    DeleteAssn?: Maybe<Assn>;
    CreateConstraint?: Maybe<Constraint>;
    UpdateConstraint?: Maybe<Constraint>;
    DeleteConstraint?: Maybe<Constraint>;
    AddConstraintType?: Maybe<Constraint>;
    RemoveConstraintType?: Maybe<Constraint>;
    AddConstraintSource?: Maybe<Constraint>;
    RemoveConstraintSource?: Maybe<Constraint>;
    CreateSorting?: Maybe<Sorting>;
    UpdateSorting?: Maybe<Sorting>;
    DeleteSorting?: Maybe<Sorting>;
    AddSortingSource?: Maybe<Sorting>;
    RemoveSortingSource?: Maybe<Sorting>;
    AddSortingType?: Maybe<Sorting>;
    RemoveSortingType?: Maybe<Sorting>;
    UpdateAction?: Maybe<Action>;
    DeleteAction?: Maybe<Action>;
    AddActionUserClass?: Maybe<Action>;
    RemoveActionUserClass?: Maybe<Action>;
    AddActionObjectType?: Maybe<Action>;
    RemoveActionObjectType?: Maybe<Action>;
    AddActionAssn?: Maybe<Action>;
    RemoveActionAssn?: Maybe<Action>;
    CreateUser?: Maybe<User>;
    UpdateUser?: Maybe<User>;
    DeleteUser?: Maybe<User>;
    RemoveUserPlatform?: Maybe<User>;
    AddUserClasses?: Maybe<User>;
    RemoveUserClasses?: Maybe<User>;
    AddUserOwnedInstances?: Maybe<User>;
    RemoveUserOwnedInstances?: Maybe<User>;
    CreateInstance?: Maybe<Instance>;
    UpdateInstance?: Maybe<Instance>;
    DeleteInstance?: Maybe<Instance>;
    AddInstanceType?: Maybe<Instance>;
    RemoveInstanceType?: Maybe<Instance>;
    AddInstanceInstanceAssns?: Maybe<Instance>;
    RemoveInstanceInstanceAssns?: Maybe<Instance>;
    CreateInstanceAssn?: Maybe<InstanceAssn>;
    UpdateInstanceAssn?: Maybe<InstanceAssn>;
    DeleteInstanceAssn?: Maybe<InstanceAssn>;
    AddInstanceAssnAssn?: Maybe<InstanceAssn>;
    RemoveInstanceAssnAssn?: Maybe<InstanceAssn>;
    CreateForm?: Maybe<Form>;
    UpdateForm?: Maybe<Form>;
    DeleteForm?: Maybe<Form>;
    AddFormTree?: Maybe<Form>;
    RemoveFormTree?: Maybe<Form>;
    AddFormContainer?: Maybe<Form>;
    RemoveFormContainer?: Maybe<Form>;
    CreateInstanceWithChildren?: Maybe<InstanceWithChildren>;
    UpdateInstanceWithChildren?: Maybe<InstanceWithChildren>;
    DeleteInstanceWithChildren?: Maybe<InstanceWithChildren>;
    CreateFile?: Maybe<File>;
    UpdateFile?: Maybe<File>;
    DeleteFile?: Maybe<File>;
    UpdateModerator?: Maybe<Moderator>;
    DeleteModerator?: Maybe<Moderator>;
    AddModeratorIdentities?: Maybe<Moderator>;
    RemoveModeratorIdentities?: Maybe<Moderator>;
    CreateExecution?: Maybe<Execution>;
    DeleteExecution?: Maybe<Execution>;
    AddExecutionAction?: Maybe<Execution>;
    RemoveExecutionAction?: Maybe<Execution>;
    AddExecutionPerformer?: Maybe<Execution>;
    RemoveExecutionPerformer?: Maybe<Execution>;
};
export declare type MutationSingleUploadArgs = {
    file: Scalars['Upload'];
};
export declare type MutationAddToTreeArgs = {
    assnId?: Maybe<Scalars['ID']>;
    treeId?: Maybe<Scalars['ID']>;
};
export declare type MutationCreateUserClassArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
    platformId: Scalars['ID'];
};
export declare type MutationAddTypeArgs = {
    typeId?: Maybe<Scalars['ID']>;
    typeName?: Maybe<Scalars['String']>;
    parentId?: Maybe<Scalars['ID']>;
    assnId?: Maybe<Scalars['ID']>;
    assnName?: Maybe<Scalars['String']>;
    treeId?: Maybe<Scalars['ID']>;
};
export declare type MutationAddRootTypeArgs = {
    typeId?: Maybe<Scalars['ID']>;
    typeName?: Maybe<Scalars['String']>;
    treeId?: Maybe<Scalars['ID']>;
};
export declare type MutationAddAssnArgs = {
    assnId?: Maybe<Scalars['ID']>;
    assnName?: Maybe<Scalars['String']>;
    parentTypeId?: Maybe<Scalars['ID']>;
    childTypeId?: Maybe<Scalars['ID']>;
};
export declare type MutationRemoveTypeArgs = {
    typeId?: Maybe<Scalars['ID']>;
    parentId?: Maybe<Scalars['ID']>;
    treeId?: Maybe<Scalars['ID']>;
};
export declare type MutationMoveTypeArgs = {
    typeId?: Maybe<Scalars['ID']>;
    parentId?: Maybe<Scalars['ID']>;
    newParentId?: Maybe<Scalars['ID']>;
    treeId?: Maybe<Scalars['ID']>;
    newAssnId?: Maybe<Scalars['ID']>;
};
export declare type MutationCreatePlatformArgs = {
    owner: Scalars['ID'];
    id?: Maybe<Scalars['ID']>;
    ownerPlatformPassword?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    licenseId?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
    paidThrough?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
};
export declare type MutationCreateUserOnPlatformArgs = {
    userClass?: Maybe<Scalars['ID']>;
    password?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
    paidThrough?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    level?: Maybe<Scalars['Int']>;
};
export declare type MutationCreateActionArgs = {
    name?: Maybe<Scalars['String']>;
    userClassId?: Maybe<Scalars['ID']>;
    actionType?: Maybe<ActionType>;
    actionParameters?: Maybe<Scalars['String']>;
};
export declare type MutationCreateModeratorArgs = {
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    licenseId?: Maybe<Scalars['String']>;
};
export declare type MutationAddUserPlatformArgs = {
    platformId?: Maybe<Scalars['ID']>;
    userId?: Maybe<Scalars['ID']>;
    password?: Maybe<Scalars['String']>;
};
export declare type MutationExecuteActionArgs = {
    actionId: Scalars['ID'];
    executionParameters?: Maybe<Scalars['String']>;
    file?: Maybe<Scalars['Upload']>;
    unrestricted?: Maybe<Scalars['Boolean']>;
};
export declare type MutationAddInstanceArgs = {
    typeId?: Maybe<Scalars['ID']>;
    instanceID?: Maybe<Scalars['ID']>;
    value?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Float']>;
    parentTypeId?: Maybe<Scalars['ID']>;
    parentInstanceId?: Maybe<Scalars['ID']>;
    treeId?: Maybe<Scalars['ID']>;
    childExists?: Maybe<Scalars['Boolean']>;
    ownerless?: Maybe<Scalars['Boolean']>;
};
export declare type MutationAddCollectionArgs = {
    collectionId?: Maybe<Scalars['ID']>;
    collectionName?: Maybe<Scalars['String']>;
    restricted?: Maybe<Scalars['Boolean']>;
};
export declare type MutationRemoveInstanceArgs = {
    typeId?: Maybe<Scalars['ID']>;
    instanceID?: Maybe<Scalars['ID']>;
    parentTypeId?: Maybe<Scalars['ID']>;
    parentInstanceId?: Maybe<Scalars['ID']>;
    treeId?: Maybe<Scalars['ID']>;
};
export declare type MutationBuildStackFromTemplateArgs = {
    template?: Maybe<Scalars['String']>;
    platformId?: Maybe<Scalars['ID']>;
    sampleEmail?: Maybe<Scalars['String']>;
    addedSuffix?: Maybe<Scalars['String']>;
};
export declare type MutationCreatePageArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    contents?: Maybe<Scalars['String']>;
    restricted?: Maybe<Scalars['Boolean']>;
    css?: Maybe<Scalars['String']>;
};
export declare type MutationUpdatePageArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    contents?: Maybe<Scalars['String']>;
    restricted?: Maybe<Scalars['Boolean']>;
    css?: Maybe<Scalars['String']>;
};
export declare type MutationDeletePageArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddPageContainerArgs = {
    pageid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationRemovePageContainerArgs = {
    pageid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationCreateContainerArgs = {
    id?: Maybe<Scalars['ID']>;
};
export declare type MutationDeleteContainerArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddContainerFormatArgs = {
    containerid: Scalars['ID'];
    formatid: Scalars['ID'];
};
export declare type MutationRemoveContainerFormatArgs = {
    containerid: Scalars['ID'];
    formatid: Scalars['ID'];
};
export declare type MutationAddContainerElement_MapsArgs = {
    containerid: Scalars['ID'];
    elementmapid: Scalars['ID'];
};
export declare type MutationRemoveContainerElement_MapsArgs = {
    containerid: Scalars['ID'];
    elementmapid: Scalars['ID'];
};
export declare type MutationCreateFormatArgs = {
    id?: Maybe<Scalars['ID']>;
    json?: Maybe<Scalars['String']>;
    layouts?: Maybe<Scalars['String']>;
    background_color?: Maybe<Scalars['String']>;
    border_color?: Maybe<Scalars['String']>;
    border_thickness?: Maybe<Scalars['Int']>;
};
export declare type MutationUpdateFormatArgs = {
    id: Scalars['ID'];
    json?: Maybe<Scalars['String']>;
    layouts?: Maybe<Scalars['String']>;
    background_color?: Maybe<Scalars['String']>;
    border_color?: Maybe<Scalars['String']>;
    border_thickness?: Maybe<Scalars['Int']>;
};
export declare type MutationDeleteFormatArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateElementMapArgs = {
    id?: Maybe<Scalars['ID']>;
    i: Scalars['ID'];
};
export declare type MutationUpdateElementMapArgs = {
    id: Scalars['ID'];
    i?: Maybe<Scalars['ID']>;
};
export declare type MutationDeleteElementMapArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddElementMapElementArgs = {
    elementmapid: Scalars['ID'];
    elementid: Scalars['ID'];
};
export declare type MutationRemoveElementMapElementArgs = {
    elementmapid: Scalars['ID'];
    elementid: Scalars['ID'];
};
export declare type MutationCreateElementArgs = {
    id?: Maybe<Scalars['ID']>;
    i: Scalars['ID'];
    element_type?: Maybe<ElementType>;
    image?: Maybe<Scalars['String']>;
    text?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateElementArgs = {
    id: Scalars['ID'];
    i?: Maybe<Scalars['ID']>;
    element_type?: Maybe<ElementType>;
    image?: Maybe<Scalars['String']>;
    text?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteElementArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddElementSparkletArgs = {
    elementid: Scalars['ID'];
    sparkletid: Scalars['ID'];
};
export declare type MutationRemoveElementSparkletArgs = {
    elementid: Scalars['ID'];
    sparkletid: Scalars['ID'];
};
export declare type MutationAddElementContainerArgs = {
    elementid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationRemoveElementContainerArgs = {
    elementid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationAddElementFormArgs = {
    elementid: Scalars['ID'];
    formid: Scalars['ID'];
};
export declare type MutationRemoveElementFormArgs = {
    elementid: Scalars['ID'];
    formid: Scalars['ID'];
};
export declare type MutationCreateSparkletArgs = {
    id?: Maybe<Scalars['ID']>;
    has_value?: Maybe<Scalars['Boolean']>;
    is_multiple?: Maybe<Scalars['Boolean']>;
};
export declare type MutationUpdateSparkletArgs = {
    id: Scalars['ID'];
    has_value?: Maybe<Scalars['Boolean']>;
    is_multiple?: Maybe<Scalars['Boolean']>;
};
export declare type MutationDeleteSparkletArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddSparkletPageArgs = {
    sparkletid: Scalars['ID'];
    pageid: Scalars['ID'];
};
export declare type MutationRemoveSparkletPageArgs = {
    sparkletid: Scalars['ID'];
    pageid: Scalars['ID'];
};
export declare type MutationAddSparkletTypesArgs = {
    sparkletid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationRemoveSparkletTypesArgs = {
    sparkletid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationAddSparkletTreeArgs = {
    sparkletid: Scalars['ID'];
    treeid: Scalars['ID'];
};
export declare type MutationRemoveSparkletTreeArgs = {
    sparkletid: Scalars['ID'];
    treeid: Scalars['ID'];
};
export declare type MutationAddSparkletTemplateArgs = {
    sparkletid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationRemoveSparkletTemplateArgs = {
    sparkletid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationCreateTypeArgs = {
    id?: Maybe<Scalars['ID']>;
    name: Scalars['String'];
    hasValue?: Maybe<Scalars['Boolean']>;
    dataType?: Maybe<DataType>;
};
export declare type MutationUpdateTypeArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    hasValue?: Maybe<Scalars['Boolean']>;
    dataType?: Maybe<DataType>;
};
export declare type MutationDeleteTypeArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddTypePlatformArgs = {
    typeid: Scalars['ID'];
    platformid: Scalars['ID'];
};
export declare type MutationRemoveTypePlatformArgs = {
    typeid: Scalars['ID'];
    platformid: Scalars['ID'];
};
export declare type MutationAddTypeAssnsArgs = {
    typeid: Scalars['ID'];
    assnid: Scalars['ID'];
};
export declare type MutationRemoveTypeAssnsArgs = {
    typeid: Scalars['ID'];
    assnid: Scalars['ID'];
};
export declare type MutationUpdatePlatformArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
    paidThrough?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
    header?: Maybe<Scalars['String']>;
    footer?: Maybe<Scalars['String']>;
};
export declare type MutationDeletePlatformArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddPlatformModeratorsArgs = {
    platformid: Scalars['ID'];
    userid: Scalars['ID'];
};
export declare type MutationRemovePlatformModeratorsArgs = {
    platformid: Scalars['ID'];
    userid: Scalars['ID'];
};
export declare type MutationUpdateUserClassArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteUserClassArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddUserClassFeeArgs = {
    userclassid: Scalars['ID'];
    feevalue: Scalars['Int'];
};
export declare type MutationRemoveUserClassFeeArgs = {
    userclassid: Scalars['ID'];
    feevalue: Scalars['Int'];
};
export declare type MutationAddUserClassPagesArgs = {
    userclassid: Scalars['ID'];
    pageid: Scalars['ID'];
};
export declare type MutationRemoveUserClassPagesArgs = {
    userclassid: Scalars['ID'];
    pageid: Scalars['ID'];
};
export declare type MutationAddUserClassCollectionArgs = {
    userclassid: Scalars['ID'];
    collectionid: Scalars['ID'];
};
export declare type MutationRemoveUserClassCollectionArgs = {
    userclassid: Scalars['ID'];
    collectionid: Scalars['ID'];
};
export declare type MutationAddUserClassPlatformArgs = {
    userclassid: Scalars['ID'];
    platformid: Scalars['ID'];
};
export declare type MutationRemoveUserClassPlatformArgs = {
    userclassid: Scalars['ID'];
    platformid: Scalars['ID'];
};
export declare type MutationAddUserClassPermittedTypesArgs = {
    userclassid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationRemoveUserClassPermittedTypesArgs = {
    userclassid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationCreateFeeArgs = {
    value?: Maybe<Scalars['Int']>;
    frequency?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateFeeArgs = {
    value: Scalars['Int'];
    frequency?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteFeeArgs = {
    value: Scalars['Int'];
};
export declare type MutationAddFeeCurrencyArgs = {
    feevalue: Scalars['Int'];
    currencyname: Scalars['String'];
};
export declare type MutationRemoveFeeCurrencyArgs = {
    feevalue: Scalars['Int'];
    currencyname: Scalars['String'];
};
export declare type MutationCreateCurrencyArgs = {
    name?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateCurrencyArgs = {
    name: Scalars['String'];
    symbol?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteCurrencyArgs = {
    name: Scalars['String'];
};
export declare type MutationCreateCollectionArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    restricted?: Maybe<Scalars['Boolean']>;
};
export declare type MutationUpdateCollectionArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    restricted?: Maybe<Scalars['Boolean']>;
};
export declare type MutationDeleteCollectionArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateSourceArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    has_value?: Maybe<Scalars['Boolean']>;
    is_multiple?: Maybe<Scalars['Boolean']>;
};
export declare type MutationUpdateSourceArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    has_value?: Maybe<Scalars['Boolean']>;
    is_multiple?: Maybe<Scalars['Boolean']>;
};
export declare type MutationDeleteSourceArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddSourceCollectionArgs = {
    sourceid: Scalars['ID'];
    collectionid: Scalars['ID'];
};
export declare type MutationRemoveSourceCollectionArgs = {
    sourceid: Scalars['ID'];
    collectionid: Scalars['ID'];
};
export declare type MutationAddSourceTypesArgs = {
    sourceid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationRemoveSourceTypesArgs = {
    sourceid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationAddSourceTreeArgs = {
    sourceid: Scalars['ID'];
    treeid: Scalars['ID'];
};
export declare type MutationRemoveSourceTreeArgs = {
    sourceid: Scalars['ID'];
    treeid: Scalars['ID'];
};
export declare type MutationAddSourceTemplateArgs = {
    sourceid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationRemoveSourceTemplateArgs = {
    sourceid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationCreateTreeArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateTreeArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteTreeArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddTreeRootArgs = {
    treeid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationRemoveTreeRootArgs = {
    treeid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationAddTreeAssnsArgs = {
    treeid: Scalars['ID'];
    assnid: Scalars['ID'];
};
export declare type MutationRemoveTreeAssnsArgs = {
    treeid: Scalars['ID'];
    assnid: Scalars['ID'];
};
export declare type MutationCreateAssnArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    multiple?: Maybe<Scalars['Boolean']>;
    sorted?: Maybe<Scalars['Boolean']>;
};
export declare type MutationUpdateAssnArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    multiple?: Maybe<Scalars['Boolean']>;
    sorted?: Maybe<Scalars['Boolean']>;
};
export declare type MutationDeleteAssnArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateConstraintArgs = {
    id?: Maybe<Scalars['ID']>;
    value?: Maybe<Scalars['String']>;
    constrainttype?: Maybe<ConstraintType>;
};
export declare type MutationUpdateConstraintArgs = {
    id: Scalars['ID'];
    value?: Maybe<Scalars['String']>;
    constrainttype?: Maybe<ConstraintType>;
};
export declare type MutationDeleteConstraintArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddConstraintTypeArgs = {
    constraintid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationRemoveConstraintTypeArgs = {
    constraintid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationAddConstraintSourceArgs = {
    constraintid: Scalars['ID'];
    sourceid: Scalars['ID'];
};
export declare type MutationRemoveConstraintSourceArgs = {
    constraintid: Scalars['ID'];
    sourceid: Scalars['ID'];
};
export declare type MutationCreateSortingArgs = {
    id?: Maybe<Scalars['ID']>;
    order?: Maybe<Scalars['Int']>;
    direction?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateSortingArgs = {
    id: Scalars['ID'];
    order?: Maybe<Scalars['Int']>;
    direction?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteSortingArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddSortingSourceArgs = {
    sortingid: Scalars['ID'];
    sourceid: Scalars['ID'];
};
export declare type MutationRemoveSortingSourceArgs = {
    sortingid: Scalars['ID'];
    sourceid: Scalars['ID'];
};
export declare type MutationAddSortingTypeArgs = {
    sortingid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationRemoveSortingTypeArgs = {
    sortingid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationUpdateActionArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    actionType?: Maybe<ActionType>;
};
export declare type MutationDeleteActionArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddActionUserClassArgs = {
    actionid: Scalars['ID'];
    userclassid: Scalars['ID'];
};
export declare type MutationRemoveActionUserClassArgs = {
    actionid: Scalars['ID'];
    userclassid: Scalars['ID'];
};
export declare type MutationAddActionObjectTypeArgs = {
    actionid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationRemoveActionObjectTypeArgs = {
    actionid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationAddActionAssnArgs = {
    actionid: Scalars['ID'];
    assnid: Scalars['ID'];
};
export declare type MutationRemoveActionAssnArgs = {
    actionid: Scalars['ID'];
    assnid: Scalars['ID'];
};
export declare type MutationCreateUserArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
    paidThrough?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    level?: Maybe<Scalars['Int']>;
};
export declare type MutationUpdateUserArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
    paidThrough?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    level?: Maybe<Scalars['Int']>;
};
export declare type MutationDeleteUserArgs = {
    id: Scalars['ID'];
};
export declare type MutationRemoveUserPlatformArgs = {
    userid: Scalars['ID'];
    platformid: Scalars['ID'];
};
export declare type MutationAddUserClassesArgs = {
    userid: Scalars['ID'];
    userclassid: Scalars['ID'];
};
export declare type MutationRemoveUserClassesArgs = {
    userid: Scalars['ID'];
    userclassid: Scalars['ID'];
};
export declare type MutationAddUserOwnedInstancesArgs = {
    userid: Scalars['ID'];
    instanceid: Scalars['ID'];
};
export declare type MutationRemoveUserOwnedInstancesArgs = {
    userid: Scalars['ID'];
    instanceid: Scalars['ID'];
};
export declare type MutationCreateInstanceArgs = {
    id?: Maybe<Scalars['ID']>;
    value?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Float']>;
};
export declare type MutationUpdateInstanceArgs = {
    id: Scalars['ID'];
    value?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Float']>;
};
export declare type MutationDeleteInstanceArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddInstanceTypeArgs = {
    instanceid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationRemoveInstanceTypeArgs = {
    instanceid: Scalars['ID'];
    typeid: Scalars['ID'];
};
export declare type MutationAddInstanceInstanceAssnsArgs = {
    instanceid: Scalars['ID'];
    instanceassnid: Scalars['ID'];
};
export declare type MutationRemoveInstanceInstanceAssnsArgs = {
    instanceid: Scalars['ID'];
    instanceassnid: Scalars['ID'];
};
export declare type MutationCreateInstanceAssnArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Float']>;
};
export declare type MutationUpdateInstanceAssnArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Float']>;
};
export declare type MutationDeleteInstanceAssnArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddInstanceAssnAssnArgs = {
    instanceassnid: Scalars['ID'];
    assnid: Scalars['ID'];
};
export declare type MutationRemoveInstanceAssnAssnArgs = {
    instanceassnid: Scalars['ID'];
    assnid: Scalars['ID'];
};
export declare type MutationCreateFormArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    constraints?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateFormArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    constraints?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteFormArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddFormTreeArgs = {
    formid: Scalars['ID'];
    treeid: Scalars['ID'];
};
export declare type MutationRemoveFormTreeArgs = {
    formid: Scalars['ID'];
    treeid: Scalars['ID'];
};
export declare type MutationAddFormContainerArgs = {
    formid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationRemoveFormContainerArgs = {
    formid: Scalars['ID'];
    containerid: Scalars['ID'];
};
export declare type MutationCreateInstanceWithChildrenArgs = {
    id?: Maybe<Scalars['ID']>;
    type?: Maybe<Scalars['ID']>;
};
export declare type MutationUpdateInstanceWithChildrenArgs = {
    id: Scalars['ID'];
    type?: Maybe<Scalars['ID']>;
};
export declare type MutationDeleteInstanceWithChildrenArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateFileArgs = {
    filename: Scalars['String'];
    mimetype: Scalars['String'];
    encoding: Scalars['String'];
};
export declare type MutationUpdateFileArgs = {
    filename: Scalars['String'];
    mimetype?: Maybe<Scalars['String']>;
    encoding?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteFileArgs = {
    filename: Scalars['String'];
};
export declare type MutationUpdateModeratorArgs = {
    id: Scalars['ID'];
    noStackId?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
};
export declare type MutationDeleteModeratorArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddModeratorIdentitiesArgs = {
    moderatorid: Scalars['ID'];
    userid: Scalars['ID'];
};
export declare type MutationRemoveModeratorIdentitiesArgs = {
    moderatorid: Scalars['ID'];
    userid: Scalars['ID'];
};
export declare type MutationCreateExecutionArgs = {
    id?: Maybe<Scalars['ID']>;
};
export declare type MutationDeleteExecutionArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddExecutionActionArgs = {
    executionid: Scalars['ID'];
    actionid: Scalars['ID'];
};
export declare type MutationRemoveExecutionActionArgs = {
    executionid: Scalars['ID'];
    actionid: Scalars['ID'];
};
export declare type MutationAddExecutionPerformerArgs = {
    executionid: Scalars['ID'];
    userid: Scalars['ID'];
};
export declare type MutationRemoveExecutionPerformerArgs = {
    executionid: Scalars['ID'];
    userid: Scalars['ID'];
};
export declare type Page = {
    __typename?: 'Page';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    contents?: Maybe<Scalars['String']>;
    restricted?: Maybe<Scalars['Boolean']>;
    css?: Maybe<Scalars['String']>;
    container?: Maybe<Container>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type Platform = {
    __typename?: 'Platform';
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
    paidThrough?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
    classes?: Maybe<Array<Maybe<UserClass>>>;
    moderators?: Maybe<Array<Maybe<User>>>;
    types?: Maybe<Array<Maybe<Type>>>;
    header?: Maybe<Scalars['String']>;
    footer?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type PlatformClassesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_UserClassOrdering>;
};
export declare type PlatformModeratorsArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_UserOrdering>;
};
export declare type PlatformTypesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_TypeOrdering>;
};
export declare type Query = {
    __typename?: 'Query';
    platformInfo?: Maybe<Scalars['String']>;
    pagesForUser?: Maybe<Array<Maybe<Page>>>;
    pageFromRoute?: Maybe<Page>;
    sourceMetaInfo?: Maybe<Scalars['String']>;
    valueForInstance?: Maybe<Scalars['String']>;
    collectionData?: Maybe<Scalars['String']>;
    sourceData?: Maybe<Array<Maybe<InstanceWithChildren>>>;
    UserOwns?: Maybe<Scalars['Boolean']>;
    typesNotInTree?: Maybe<Array<Maybe<Type>>>;
    pathsBetweenTypes?: Maybe<Scalars['String']>;
    generatePdf?: Maybe<Scalars['Upload']>;
    Page?: Maybe<Array<Maybe<Page>>>;
    Container?: Maybe<Array<Maybe<Container>>>;
    Format?: Maybe<Array<Maybe<Format>>>;
    ElementMap?: Maybe<Array<Maybe<ElementMap>>>;
    Element?: Maybe<Array<Maybe<Element>>>;
    Sparklet?: Maybe<Array<Maybe<Sparklet>>>;
    Type?: Maybe<Array<Maybe<Type>>>;
    Platform?: Maybe<Array<Maybe<Platform>>>;
    UserClass?: Maybe<Array<Maybe<UserClass>>>;
    Fee?: Maybe<Array<Maybe<Fee>>>;
    Currency?: Maybe<Array<Maybe<Currency>>>;
    Collection?: Maybe<Array<Maybe<Collection>>>;
    Source?: Maybe<Array<Maybe<Source>>>;
    Tree?: Maybe<Array<Maybe<Tree>>>;
    Assn?: Maybe<Array<Maybe<Assn>>>;
    Constraint?: Maybe<Array<Maybe<Constraint>>>;
    Sorting?: Maybe<Array<Maybe<Sorting>>>;
    Action?: Maybe<Array<Maybe<Action>>>;
    User?: Maybe<Array<Maybe<User>>>;
    Instance?: Maybe<Array<Maybe<Instance>>>;
    InstanceAssn?: Maybe<Array<Maybe<InstanceAssn>>>;
    Form?: Maybe<Array<Maybe<Form>>>;
    InstanceWithChildren?: Maybe<Array<Maybe<InstanceWithChildren>>>;
    File?: Maybe<Array<Maybe<File>>>;
    Moderator?: Maybe<Array<Maybe<Moderator>>>;
    Execution?: Maybe<Array<Maybe<Execution>>>;
};
export declare type QueryPlatformInfoArgs = {
    platformId: Scalars['ID'];
};
export declare type QueryPagesForUserArgs = {
    userId: Scalars['ID'];
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_PageOrdering>;
};
export declare type QueryPageFromRouteArgs = {
    pageName?: Maybe<Scalars['String']>;
    platformName?: Maybe<Scalars['String']>;
};
export declare type QuerySourceMetaInfoArgs = {
    sourceId?: Maybe<Scalars['ID']>;
};
export declare type QueryValueForInstanceArgs = {
    typeId?: Maybe<Scalars['ID']>;
    instanceId?: Maybe<Scalars['ID']>;
    unrestricted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryCollectionDataArgs = {
    collectionId?: Maybe<Scalars['ID']>;
    unrestricted?: Maybe<Scalars['Boolean']>;
    parameters?: Maybe<Scalars['String']>;
};
export declare type QuerySourceDataArgs = {
    sourceId?: Maybe<Scalars['ID']>;
    typeRelationships?: Maybe<Scalars['String']>;
    unrestricted?: Maybe<Scalars['Boolean']>;
    parameters?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_InstanceWithChildrenOrdering>;
};
export declare type QueryUserOwnsArgs = {
    instanceId?: Maybe<Scalars['ID']>;
};
export declare type QueryTypesNotInTreeArgs = {
    treeId?: Maybe<Scalars['ID']>;
    platformId?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_TypeOrdering>;
};
export declare type QueryPathsBetweenTypesArgs = {
    treeType?: Maybe<Scalars['ID']>;
    newType?: Maybe<Scalars['ID']>;
};
export declare type QueryGeneratePdfArgs = {
    json?: Maybe<Scalars['String']>;
};
export declare type QueryPageArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    contents?: Maybe<Scalars['String']>;
    restricted?: Maybe<Scalars['Boolean']>;
    css?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_PageOrdering>;
};
export declare type QueryContainerArgs = {
    id?: Maybe<Scalars['ID']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ContainerOrdering>;
};
export declare type QueryFormatArgs = {
    id?: Maybe<Scalars['ID']>;
    json?: Maybe<Scalars['String']>;
    layouts?: Maybe<Scalars['String']>;
    background_color?: Maybe<Scalars['String']>;
    border_color?: Maybe<Scalars['String']>;
    border_thickness?: Maybe<Scalars['Int']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_FormatOrdering>;
};
export declare type QueryElementMapArgs = {
    id?: Maybe<Scalars['ID']>;
    i?: Maybe<Scalars['ID']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ElementMapOrdering>;
};
export declare type QueryElementArgs = {
    id?: Maybe<Scalars['ID']>;
    i?: Maybe<Scalars['ID']>;
    element_type?: Maybe<ElementType>;
    image?: Maybe<Scalars['String']>;
    text?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ElementOrdering>;
};
export declare type QuerySparkletArgs = {
    id?: Maybe<Scalars['ID']>;
    has_value?: Maybe<Scalars['Boolean']>;
    is_multiple?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_SparkletOrdering>;
};
export declare type QueryTypeArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    hasValue?: Maybe<Scalars['Boolean']>;
    dataType?: Maybe<DataType>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_TypeOrdering>;
};
export declare type QueryPlatformArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
    paidThrough?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
    header?: Maybe<Scalars['String']>;
    footer?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_PlatformOrdering>;
};
export declare type QueryUserClassArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_UserClassOrdering>;
};
export declare type QueryFeeArgs = {
    value?: Maybe<Scalars['Int']>;
    frequency?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_FeeOrdering>;
};
export declare type QueryCurrencyArgs = {
    name?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_CurrencyOrdering>;
};
export declare type QueryCollectionArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    restricted?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_CollectionOrdering>;
};
export declare type QuerySourceArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    has_value?: Maybe<Scalars['Boolean']>;
    is_multiple?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_SourceOrdering>;
};
export declare type QueryTreeArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_TreeOrdering>;
};
export declare type QueryAssnArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    multiple?: Maybe<Scalars['Boolean']>;
    sorted?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_AssnOrdering>;
};
export declare type QueryConstraintArgs = {
    id?: Maybe<Scalars['ID']>;
    value?: Maybe<Scalars['String']>;
    constrainttype?: Maybe<ConstraintType>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ConstraintOrdering>;
};
export declare type QuerySortingArgs = {
    id?: Maybe<Scalars['ID']>;
    order?: Maybe<Scalars['Int']>;
    direction?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_SortingOrdering>;
};
export declare type QueryActionArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    actionType?: Maybe<ActionType>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ActionOrdering>;
};
export declare type QueryUserArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
    paidThrough?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    level?: Maybe<Scalars['Int']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_UserOrdering>;
};
export declare type QueryInstanceArgs = {
    id?: Maybe<Scalars['ID']>;
    value?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Float']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_InstanceOrdering>;
};
export declare type QueryInstanceAssnArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Float']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_InstanceAssnOrdering>;
};
export declare type QueryFormArgs = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    constraints?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_FormOrdering>;
};
export declare type QueryInstanceWithChildrenArgs = {
    id?: Maybe<Scalars['ID']>;
    type?: Maybe<Scalars['ID']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_InstanceWithChildrenOrdering>;
};
export declare type QueryFileArgs = {
    filename?: Maybe<Scalars['String']>;
    mimetype?: Maybe<Scalars['String']>;
    encoding?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_FileOrdering>;
};
export declare type QueryModeratorArgs = {
    id?: Maybe<Scalars['ID']>;
    noStackId?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ModeratorOrdering>;
};
export declare type QueryExecutionArgs = {
    id?: Maybe<Scalars['ID']>;
    _id?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ExecutionOrdering>;
};
export declare type Sorting = {
    __typename?: 'Sorting';
    id: Scalars['ID'];
    order?: Maybe<Scalars['Int']>;
    direction?: Maybe<Scalars['String']>;
    source?: Maybe<Source>;
    type?: Maybe<Type>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type Source = {
    __typename?: 'Source';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    collection?: Maybe<Collection>;
    types?: Maybe<Array<Maybe<Type>>>;
    tree?: Maybe<Tree>;
    constraints?: Maybe<Array<Maybe<Constraint>>>;
    sortings?: Maybe<Array<Maybe<Sorting>>>;
    has_value?: Maybe<Scalars['Boolean']>;
    is_multiple?: Maybe<Scalars['Boolean']>;
    template?: Maybe<Container>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type SourceTypesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_TypeOrdering>;
};
export declare type SourceConstraintsArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ConstraintOrdering>;
};
export declare type SourceSortingsArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_SortingOrdering>;
};
export declare type Sparklet = {
    __typename?: 'Sparklet';
    id: Scalars['ID'];
    page?: Maybe<Page>;
    types?: Maybe<Array<Maybe<Type>>>;
    tree?: Maybe<Tree>;
    has_value?: Maybe<Scalars['Boolean']>;
    is_multiple?: Maybe<Scalars['Boolean']>;
    template?: Maybe<Container>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type SparkletTypesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_TypeOrdering>;
};
export declare type Tree = {
    __typename?: 'Tree';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    root?: Maybe<Type>;
    assns?: Maybe<Array<Maybe<Assn>>>;
    nodes?: Maybe<Array<Maybe<Type>>>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type TreeAssnsArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_AssnOrdering>;
};
export declare type TreeNodesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_TypeOrdering>;
};
export declare type Type = {
    __typename?: 'Type';
    id: Scalars['ID'];
    name: Scalars['String'];
    hasValue?: Maybe<Scalars['Boolean']>;
    dataType?: Maybe<DataType>;
    platform?: Maybe<Array<Maybe<Platform>>>;
    assns?: Maybe<Array<Maybe<Assn>>>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type TypePlatformArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_PlatformOrdering>;
};
export declare type TypeAssnsArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_AssnOrdering>;
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    paymentId?: Maybe<Scalars['String']>;
    paidThrough?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    level?: Maybe<Scalars['Int']>;
    platform?: Maybe<Platform>;
    classes?: Maybe<Array<Maybe<UserClass>>>;
    ownedInstances?: Maybe<Array<Maybe<Instance>>>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type UserClassesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_UserClassOrdering>;
};
export declare type UserOwnedInstancesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_InstanceOrdering>;
};
export declare type UserClass = {
    __typename?: 'UserClass';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    fee?: Maybe<Fee>;
    pages?: Maybe<Array<Maybe<Page>>>;
    collection?: Maybe<Array<Maybe<Collection>>>;
    actions?: Maybe<Array<Maybe<Action>>>;
    platform?: Maybe<Platform>;
    permittedTypes?: Maybe<Array<Maybe<Type>>>;
    _id?: Maybe<Scalars['Int']>;
};
export declare type UserClassPagesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_PageOrdering>;
};
export declare type UserClassCollectionArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_CollectionOrdering>;
};
export declare type UserClassActionsArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_ActionOrdering>;
};
export declare type UserClassPermittedTypesArgs = {
    first?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<_TypeOrdering>;
};
export declare type ExecuteActionMutationVariables = {
    actionId: Scalars['ID'];
    executionParameters?: Maybe<Scalars['String']>;
    unrestricted?: Maybe<Scalars['Boolean']>;
};
export declare type ExecuteActionMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'ExecuteAction'>);
export declare const ExecuteActionDocument: any;
export declare type ExecuteActionMutationFn = ApolloReactCommon.MutationFunction<ExecuteActionMutation, ExecuteActionMutationVariables>;
export declare type ExecuteActionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ExecuteActionMutation, ExecuteActionMutationVariables>, 'mutation'>;
export declare const ExecuteActionComponent: (props: Pick<ApolloReactComponents.MutationComponentOptions<{
    __typename?: "Mutation" | undefined;
} & Pick<Mutation, "ExecuteAction">, ExecuteActionMutationVariables>, "children" | "variables" | "optimisticResponse" | "refetchQueries" | "awaitRefetchQueries" | "errorPolicy" | "update" | "client" | "notifyOnNetworkStatusChange" | "context" | "onCompleted" | "onError" | "fetchPolicy" | "ignoreResults">) => JSX.Element;
export declare type ExecuteActionProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ExecuteActionMutation, ExecuteActionMutationVariables> & TChildProps;
export declare function withExecuteAction<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<TProps, ExecuteActionMutation, ExecuteActionMutationVariables, ExecuteActionProps<TChildProps>>): (WrappedComponent: React.ComponentType<TProps & ApolloReactHoc.MutateProps<{
    __typename?: "Mutation" | undefined;
} & Pick<Mutation, "ExecuteAction">, ExecuteActionMutationVariables> & TChildProps>) => React.ComponentClass<TProps, any>;
export declare type ExecuteActionMutationResult = ApolloReactCommon.MutationResult<ExecuteActionMutation>;
export declare type ExecuteActionMutationOptions = ApolloReactCommon.BaseMutationOptions<ExecuteActionMutation, ExecuteActionMutationVariables>;
//# sourceMappingURL=graphql.d.ts.map