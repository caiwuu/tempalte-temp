import { post } from '@/utils/request'
import type { ILoginResponse, ILoginRequest } from '@/types/apis/login'

export const login = (config: ILoginRequest): Promise<ILoginResponse> => post('/api/login', config)
