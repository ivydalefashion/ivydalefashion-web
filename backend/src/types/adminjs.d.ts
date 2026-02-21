// src/types/adminjs.d.ts
declare module '@adminjs/nestjs' {
  export const AdminModule: any;
}

declare module '@adminjs/prisma' {
  export const Database: any;
  export const Resource: any;
  export function getModelByName(name: string): any;
}