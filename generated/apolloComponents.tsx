export type Maybe<T> = T | null;

export interface ChangePasswordInput {
  password: string;

  token: string;
}

export interface RegisterInput {
  password: string;

  firstName: string;

  lastName: string;

  email: string;
}

export interface ProductInput {
  name: string;
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export interface ChangePasswordVariables {
  data: ChangePasswordInput;
}

export interface ChangePasswordMutation {
  __typename?: "Mutation";

  changePassword: Maybe<ChangePasswordChangePassword>;
}

export interface ChangePasswordChangePassword {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
}

export interface ConfirmEmailVariables {
  token: string;
}

export interface ConfirmEmailMutation {
  __typename?: "Mutation";

  confirmEmail: boolean;
}

export interface ForgotPasswordVariables {
  email: string;
}

export interface ForgotPasswordMutation {
  __typename?: "Mutation";

  forgotPassword: boolean;
}

export interface LoginVariables {
  email: string;
  password: string;
}

export interface LoginMutation {
  __typename?: "Mutation";

  login: Maybe<LoginLogin>;
}

export interface LoginLogin {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
}

export interface LogoutVariables {}

export interface LogoutMutation {
  __typename?: "Mutation";

  logout: boolean;
}

export interface RegisterVariables {
  data: RegisterInput;
}

export interface RegisterMutation {
  __typename?: "Mutation";

  register: RegisterRegister;
}

export interface RegisterRegister {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
}

export interface HelloVariables {}

export interface HelloQuery {
  __typename?: "Query";

  hello: string;
}

export interface MeVariables {}

export interface MeQuery {
  __typename?: "Query";

  me: Maybe<MeMe>;
}

export interface MeMe {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
}

import * as React from "react";
import * as ReactApollo from "react-apollo";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const ChangePasswordDocument = gql`
  mutation ChangePassword($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class ChangePasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ChangePasswordMutation, ChangePasswordVariables>
  >
> {
  public render() {
    return (
      <ReactApollo.Mutation<ChangePasswordMutation, ChangePasswordVariables>
        mutation={ChangePasswordDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type ChangePasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ChangePasswordMutation, ChangePasswordVariables>
> &
  TChildProps;
export type ChangePasswordMutationFn = ReactApollo.MutationFn<
  ChangePasswordMutation,
  ChangePasswordVariables
>;
export function ChangePasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ChangePasswordMutation,
        ChangePasswordVariables,
        ChangePasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ChangePasswordMutation,
    ChangePasswordVariables,
    ChangePasswordProps<TChildProps>
  >(ChangePasswordDocument, operationOptions);
}
export const ConfirmEmailDocument = gql`
  mutation ConfirmEmail($token: String!) {
    confirmEmail(token: $token)
  }
`;
export class ConfirmEmailComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ConfirmEmailMutation, ConfirmEmailVariables>
  >
> {
  public render() {
    return (
      <ReactApollo.Mutation<ConfirmEmailMutation, ConfirmEmailVariables>
        mutation={ConfirmEmailDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type ConfirmEmailProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ConfirmEmailMutation, ConfirmEmailVariables>
> &
  TChildProps;
export type ConfirmEmailMutationFn = ReactApollo.MutationFn<
  ConfirmEmailMutation,
  ConfirmEmailVariables
>;
export function ConfirmEmailHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ConfirmEmailMutation,
        ConfirmEmailVariables,
        ConfirmEmailProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ConfirmEmailMutation,
    ConfirmEmailVariables,
    ConfirmEmailProps<TChildProps>
  >(ConfirmEmailDocument, operationOptions);
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
export class ForgotPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ForgotPasswordMutation, ForgotPasswordVariables>
  >
> {
  public render() {
    return (
      <ReactApollo.Mutation<ForgotPasswordMutation, ForgotPasswordVariables>
        mutation={ForgotPasswordDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type ForgotPasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ForgotPasswordMutation, ForgotPasswordVariables>
> &
  TChildProps;
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<
  ForgotPasswordMutation,
  ForgotPasswordVariables
>;
export function ForgotPasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ForgotPasswordMutation,
        ForgotPasswordVariables,
        ForgotPasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ForgotPasswordMutation,
    ForgotPasswordVariables,
    ForgotPasswordProps<TChildProps>
  >(ForgotPasswordDocument, operationOptions);
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginVariables>
        mutation={LoginDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type LoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginVariables
>;
export function LoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginVariables,
        LoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutation,
    LoginVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export class LogoutComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LogoutMutation, LogoutVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<LogoutMutation, LogoutVariables>
        mutation={LogoutDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type LogoutProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LogoutMutation, LogoutVariables>
> &
  TChildProps;
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutVariables
>;
export function LogoutHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LogoutMutation,
        LogoutVariables,
        LogoutProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LogoutMutation,
    LogoutVariables,
    LogoutProps<TChildProps>
  >(LogoutDocument, operationOptions);
}
export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterVariables>
        mutation={RegisterDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterVariables
>;
export function RegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterVariables,
        RegisterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutation,
    RegisterVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
export const HelloDocument = gql`
  query Hello {
    hello
  }
`;
export class HelloComponent extends React.Component<
  Partial<ReactApollo.QueryProps<HelloQuery, HelloVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<HelloQuery, HelloVariables>
        query={HelloDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type HelloProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<HelloQuery, HelloVariables>
> &
  TChildProps;
export function HelloHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        HelloQuery,
        HelloVariables,
        HelloProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    HelloQuery,
    HelloVariables,
    HelloProps<TChildProps>
  >(HelloDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<MeQuery, MeVariables>
        query={MeDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type MeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQuery, MeVariables>
> &
  TChildProps;
export function MeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeVariables,
        MeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQuery,
    MeVariables,
    MeProps<TChildProps>
  >(MeDocument, operationOptions);
}
