import { rest } from 'msw';

import { generateProjectDetailsEndpoint, PROJECTS_ENDPOINT, PROJECT_FEATURED_ID_ENDPOINT } from '../../apiCalls';
import {
  GetProjectDetailsPayload,
  GetProjectDetailsResponse,
  GetProjectFeaturedIdResponse,
  GetProjectsResponse,
} from '../../contracts';
import {
  getProjectDetails as mockedProjectDetails,
  projectFeaturedId as mockedFeaturedId,
  projectsList as mockedProjectList,
} from '../../mocks/projects';

const getProjectFeaturedIdSuccess = rest.get<GetProjectFeaturedIdResponse>(
  PROJECT_FEATURED_ID_ENDPOINT,
  (_, res, ctx) => res(ctx.json(mockedFeaturedId))
);

const getProjectListSuccess = rest.get<GetProjectsResponse>(PROJECTS_ENDPOINT, (_, res, ctx) =>
  res(ctx.json(mockedProjectList))
);

const getProjectDetailsSuccess = rest.get<GetProjectDetailsPayload, GetProjectDetailsResponse | undefined>(
  generateProjectDetailsEndpoint(':id'),
  (req, res, ctx) => {
    const {
      params: { id },
    } = req;

    return res(ctx.json(mockedProjectDetails(id)));
  }
);

export const getProjectListFailed = rest.get(PROJECTS_ENDPOINT, (_, res, ctx) =>
  res.once(
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const getProjectDetailsFailed = rest.get(generateProjectDetailsEndpoint(':id'), (_, res, ctx) =>
  res.once(
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const projectsHandlers = [getProjectListSuccess, getProjectDetailsSuccess, getProjectFeaturedIdSuccess];
