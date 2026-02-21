// src/admin/admin.resources.ts
import { getModelByName } from '@adminjs/prisma';
// import { PrismaService } from '../prisma/prisma.service';
import { PrismaService } from '../prisma.service';

export const createAdminResources = (prismaService: PrismaService) => {
  // Get all model names from Prisma
  const modelNames = Object.keys(prismaService).filter(key => 
    !key.startsWith('_') && 
    !key.startsWith('$') && 
    typeof prismaService[key] === 'object'
  );

  // Create resources for each model
  return modelNames.map(modelName => ({
    resource: {
      model: getModelByName(modelName),
      client: prismaService,
    },
    options: {
      // Customize per model
      properties: {
        password: {
          isVisible: false, // Hide password field
        },
        createdAt: {
          isVisible: { list: true, filter: true, show: true, edit: false },
        },
        updatedAt: {
          isVisible: { list: true, filter: true, show: true, edit: false },
        },
      },
    },
  }));
};