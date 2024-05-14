import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  async () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John doe',
      email: 'johndoe@example.com',
      phone: '41999999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)