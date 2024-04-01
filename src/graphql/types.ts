import type * as Types from './schema.types';

export type UpdateUserMutationVariables = Types.Exact<{
  input: Types.UpdateOneUserInput;
}>;


export type UpdateUserMutation = { updateOneUser: Pick<Types.User, 'id' | 'name' | 'avatarUrl' | 'email' | 'phone' | 'jobTitle'> };

export type UsersSelectQueryVariables = Types.Exact<{
  filter: Types.UserFilter;
  sorting?: Types.InputMaybe<Array<Types.UserSort> | Types.UserSort>;
  paging: Types.OffsetPaging;
}>;


export type UsersSelectQuery = { users: (
    Pick<Types.UserConnection, 'totalCount'>
    & { nodes: Array<Pick<Types.User, 'id' | 'name' | 'avatarUrl'>> }
  ) };

export type TaskStagesSelectQueryVariables = Types.Exact<{
  filter: Types.TaskStageFilter;
  sorting?: Types.InputMaybe<Array<Types.TaskStageSort> | Types.TaskStageSort>;
  paging: Types.OffsetPaging;
}>;


export type TaskStagesSelectQuery = { taskStages: (
    Pick<Types.TaskStageConnection, 'totalCount'>
    & { nodes: Array<Pick<Types.TaskStage, 'id' | 'title'>> }
  ) };

export type DashboardTotalCountsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type DashboardTotalCountsQuery = { companies: Pick<Types.CompanyConnection, 'totalCount'>, contacts: Pick<Types.ContactConnection, 'totalCount'>, deals: Pick<Types.DealConnection, 'totalCount'> };

export type DashboardCalendarUpcomingEventsQueryVariables = Types.Exact<{
  filter: Types.EventFilter;
  sorting?: Types.InputMaybe<Array<Types.EventSort> | Types.EventSort>;
  paging: Types.OffsetPaging;
}>;


export type DashboardCalendarUpcomingEventsQuery = { events: (
    Pick<Types.EventConnection, 'totalCount'>
    & { nodes: Array<Pick<Types.Event, 'id' | 'title' | 'color' | 'startDate' | 'endDate'>> }
  ) };

export type DashboardDealsChartQueryVariables = Types.Exact<{
  filter: Types.DealStageFilter;
  sorting?: Types.InputMaybe<Array<Types.DealStageSort> | Types.DealStageSort>;
  paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;


export type DashboardDealsChartQuery = { dealStages: (
    Pick<Types.DealStageConnection, 'totalCount'>
    & { nodes: Array<(
      Pick<Types.DealStage, 'id' | 'title'>
      & { dealsAggregate: Array<{ groupBy?: Types.Maybe<Pick<Types.DealStageDealsAggregateGroupBy, 'closeDateMonth' | 'closeDateYear'>>, sum?: Types.Maybe<Pick<Types.DealStageDealsSumAggregate, 'value'>> }> }
    )> }
  ) };
