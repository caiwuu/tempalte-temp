export interface ILoginResponse {
  success: number
  code: number
  message: string
  entity: Entity
}

export interface Entity {
  id: number
  createdBy: null
  createdTime: Date
  updatedBy: null
  updatedTime: Date
  status: number
  loginName: string
  userName: string
  phone: string
  sex: string
  pwd: string
  userType: string
  userEmail: string
  orgId: number
  tenantId: number
  orgName: string
  sysDeptName: string
  departmentDn: string
  jobName: null
  oacRoles: OacRole[]
  oacMenus: OacMenu[]
  token: string
  versionId: string
  cmpTenantId: string
  billId: string
  customNo: string
}

export interface OacMenu {
  node: Node
  children: Child[] | null
}

export interface Child {
  node: Node
  children: Child[] | null
}

export interface Node {
  id: number
  parentId: number
  menuCode: string
  menuName: string
  menuType: Type
  menuUrl: null | string
  menuIcon: null
  menuDesc: string
  menuScope: null
  createdBy: null
  createdTime: Date | null
  updatedBy: null
  updatedTime: null
  status: number
  sort: number
  authMenuCode: string
  roleCode: Code
}

export enum Type {
  Menu = 'menu',
}

export enum Code {
  BusinessDepartLeader = 'business_depart_leader',
  BusinessDepartLeader2 = 'business_depart_leader2',
  CloudLeader = 'cloud_leader',
  GovernmentEnterpriseAdministra = 'government enterprise_administra',
  OperationGroup = 'operation_group',
  SchemaAdministrator = 'schema_administrator',
  SystemAdmin = 'system_admin',
  UserTask = 'user_task',
}

export interface OacRole {
  id: number
  createdBy: null
  createdTime: Date
  updatedBy: null
  updatedTime: null
  status: number
  roleCode: Code
  roleName: string
  roleType: string
  roleScope: string
  roleEntityId: null
  domainCode: null
  authorities: Authority[]
}

export interface Authority {
  id: number
  createdBy: null
  createdTime: Date
  updatedBy: null
  updatedTime: null
  status: number
  authCode: Code
  authName: string
  authType: Type
  oacMenus: Node[]
}

export interface ILoginRequest {
  uid: string
  eid: string
  userName: string
  email: string
  mobilePhone: string
  deptFullName: string
  deptName: string
  deptDN: string
  companyName: string
}
