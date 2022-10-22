/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateQuestion: OnCreateQuestionSubscription;
  onUpdateQuestion: OnUpdateQuestionSubscription;
  onDeleteQuestion: OnDeleteQuestionSubscription;
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateVote: OnCreateVoteSubscription;
  onUpdateVote: OnUpdateVoteSubscription;
  onDeleteVote: OnDeleteVoteSubscription;
};

export type CreateQuestionInput = {
  id?: string | null;
  text: string;
};

export type ModelQuestionConditionInput = {
  text?: ModelStringInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Question = {
  __typename: "Question";
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionInput = {
  id: string;
  text?: string | null;
};

export type DeleteQuestionInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateVoteInput = {
  id?: string | null;
  questionId: string;
  userId: string;
  vote: boolean;
};

export type ModelVoteConditionInput = {
  questionId?: ModelIDInput | null;
  userId?: ModelStringInput | null;
  vote?: ModelBooleanInput | null;
  and?: Array<ModelVoteConditionInput | null> | null;
  or?: Array<ModelVoteConditionInput | null> | null;
  not?: ModelVoteConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Vote = {
  __typename: "Vote";
  id: string;
  questionId: string;
  userId: string;
  vote: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVoteInput = {
  id: string;
  questionId?: string | null;
  userId?: string | null;
  vote?: boolean | null;
};

export type DeleteVoteInput = {
  id: string;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  text?: ModelStringInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection";
  items: Array<Question | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null;
  questionId?: ModelIDInput | null;
  userId?: ModelStringInput | null;
  vote?: ModelBooleanInput | null;
  and?: Array<ModelVoteFilterInput | null> | null;
  or?: Array<ModelVoteFilterInput | null> | null;
  not?: ModelVoteFilterInput | null;
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection";
  items: Array<Vote | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  text?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionVoteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  questionId?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionStringInput | null;
  vote?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionVoteFilterInput | null> | null;
  or?: Array<ModelSubscriptionVoteFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateVoteMutation = {
  __typename: "Vote";
  id: string;
  questionId: string;
  userId: string;
  vote: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVoteMutation = {
  __typename: "Vote";
  id: string;
  questionId: string;
  userId: string;
  vote: boolean;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVoteMutation = {
  __typename: "Vote";
  id: string;
  questionId: string;
  userId: string;
  vote: boolean;
  createdAt: string;
  updatedAt: string;
};

export type GetQuestionQuery = {
  __typename: "Question";
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type ListQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    text: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetVoteQuery = {
  __typename: "Vote";
  id: string;
  questionId: string;
  userId: string;
  vote: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ListVotesQuery = {
  __typename: "ModelVoteConnection";
  items: Array<{
    __typename: "Vote";
    id: string;
    questionId: string;
    userId: string;
    vote: boolean;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateVoteSubscription = {
  __typename: "Vote";
  id: string;
  questionId: string;
  userId: string;
  vote: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVoteSubscription = {
  __typename: "Vote";
  id: string;
  questionId: string;
  userId: string;
  vote: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVoteSubscription = {
  __typename: "Vote";
  id: string;
  questionId: string;
  userId: string;
  vote: boolean;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateQuestion(
    input: CreateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<CreateQuestionMutation> {
    const statement = `mutation CreateQuestion($input: CreateQuestionInput!, $condition: ModelQuestionConditionInput) {
        createQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuestionMutation>response.data.createQuestion;
  }
  async UpdateQuestion(
    input: UpdateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<UpdateQuestionMutation> {
    const statement = `mutation UpdateQuestion($input: UpdateQuestionInput!, $condition: ModelQuestionConditionInput) {
        updateQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuestionMutation>response.data.updateQuestion;
  }
  async DeleteQuestion(
    input: DeleteQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<DeleteQuestionMutation> {
    const statement = `mutation DeleteQuestion($input: DeleteQuestionInput!, $condition: ModelQuestionConditionInput) {
        deleteQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuestionMutation>response.data.deleteQuestion;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateVote(
    input: CreateVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<CreateVoteMutation> {
    const statement = `mutation CreateVote($input: CreateVoteInput!, $condition: ModelVoteConditionInput) {
        createVote(input: $input, condition: $condition) {
          __typename
          id
          questionId
          userId
          vote
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVoteMutation>response.data.createVote;
  }
  async UpdateVote(
    input: UpdateVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<UpdateVoteMutation> {
    const statement = `mutation UpdateVote($input: UpdateVoteInput!, $condition: ModelVoteConditionInput) {
        updateVote(input: $input, condition: $condition) {
          __typename
          id
          questionId
          userId
          vote
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVoteMutation>response.data.updateVote;
  }
  async DeleteVote(
    input: DeleteVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<DeleteVoteMutation> {
    const statement = `mutation DeleteVote($input: DeleteVoteInput!, $condition: ModelVoteConditionInput) {
        deleteVote(input: $input, condition: $condition) {
          __typename
          id
          questionId
          userId
          vote
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVoteMutation>response.data.deleteVote;
  }
  async GetQuestion(id: string): Promise<GetQuestionQuery> {
    const statement = `query GetQuestion($id: ID!) {
        getQuestion(id: $id) {
          __typename
          id
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuestionQuery>response.data.getQuestion;
  }
  async ListQuestions(
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuestionsQuery> {
    const statement = `query ListQuestions($filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String) {
        listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            text
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuestionsQuery>response.data.listQuestions;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetVote(id: string): Promise<GetVoteQuery> {
    const statement = `query GetVote($id: ID!) {
        getVote(id: $id) {
          __typename
          id
          questionId
          userId
          vote
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVoteQuery>response.data.getVote;
  }
  async ListVotes(
    filter?: ModelVoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVotesQuery> {
    const statement = `query ListVotes($filter: ModelVoteFilterInput, $limit: Int, $nextToken: String) {
        listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            questionId
            userId
            vote
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVotesQuery>response.data.listVotes;
  }
  OnCreateQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
  > {
    const statement = `subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onCreateQuestion(filter: $filter) {
          __typename
          id
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
    >;
  }

  OnUpdateQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
  > {
    const statement = `subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onUpdateQuestion(filter: $filter) {
          __typename
          id
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
    >;
  }

  OnDeleteQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
  > {
    const statement = `subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onDeleteQuestion(filter: $filter) {
          __typename
          id
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
    >;
  }

  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
        onCreateUser(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
        onUpdateUser(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
        onDeleteUser(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }

  OnCreateVoteListener(
    filter?: ModelSubscriptionVoteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVote">>
  > {
    const statement = `subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
        onCreateVote(filter: $filter) {
          __typename
          id
          questionId
          userId
          vote
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVote">>
    >;
  }

  OnUpdateVoteListener(
    filter?: ModelSubscriptionVoteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVote">>
  > {
    const statement = `subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
        onUpdateVote(filter: $filter) {
          __typename
          id
          questionId
          userId
          vote
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVote">>
    >;
  }

  OnDeleteVoteListener(
    filter?: ModelSubscriptionVoteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVote">>
  > {
    const statement = `subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
        onDeleteVote(filter: $filter) {
          __typename
          id
          questionId
          userId
          vote
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVote">>
    >;
  }
}
