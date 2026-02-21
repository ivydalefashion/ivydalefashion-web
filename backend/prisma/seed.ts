import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  const hashedPassword = await bcrypt.hash('Admin@123!', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@ivydalefashion.co.za' },
    update: {},
    create: {
      email: 'admin@ivydalefashion.co.za',
      password: hashedPassword,
      firstName: 'Ivydale',
      lastName: 'Admin',
      role: 'ADMIN',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  const author = await prisma.blogAuthor.upsert({
    where: { id: 'seed-author-1' },
    update: {},
    create: {
      id: 'seed-author-1',
      name: 'Ivydale Fashion Team',
      bio: 'The official Ivydale Fashion editorial team.',
    },
  });
  console.log('✅ Blog author created');

  await prisma.category.upsert({ where: { slug: 'shirts' }, update: {}, create: { name: 'Shirts', slug: 'shirts' } });
  await prisma.category.upsert({ where: { slug: 'hoodies' }, update: {}, create: { name: 'Hoodies', slug: 'hoodies' } });
  await prisma.category.upsert({ where: { slug: 'pants' }, update: {}, create: { name: 'Pants', slug: 'pants' } });
  console.log('✅ Categories created');

  await prisma.brand.upsert({
    where: { slug: 'adidas' },
    update: {},
    create: {
      name: 'Adidas',
      slug: 'adidas',
      description: 'Adidas is a German multinational corporation that designs and manufactures shoes, clothing and accessories.',
      instagram: 'https://instagram.com/adidas',
      twitter: 'https://twitter.com/adidas',
      facebook: 'https://facebook.com/adidas',
    },
  });
  console.log('✅ Sample brand created');

  await prisma.blogTag.upsert({ where: { slug: 'fashion' }, update: {}, create: { name: 'Fashion', slug: 'fashion' } });
  await prisma.blogTag.upsert({ where: { slug: 'style' }, update: {}, create: { name: 'Style', slug: 'style' } });
  console.log('✅ Blog tags created');

  console.log('🎉 Seeding complete!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
