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
  await prisma.brand.upsert({
    where: { slug: 'ivydale-street' },
    update: {},
    create: {
      name: 'Ivydale Street',
      slug: 'ivydale-street',
      description: 'Local premium streetwear brand.',
      instagram: 'https://instagram.com/ivydalefashion',
    },
  });
  await prisma.brand.upsert({
    where: { slug: 'cape-town-kicks' },
    update: {},
    create: {
      name: 'Cape Town Kicks',
      slug: 'cape-town-kicks',
      description: 'Local sneaker and urban essentials label.',
      instagram: 'https://instagram.com/capetownkicks',
    },
  });
  console.log('✅ Sample brand created');

  const shirts = await prisma.category.findUnique({ where: { slug: 'shirts' } });
  const hoodies = await prisma.category.findUnique({ where: { slug: 'hoodies' } });
  const adidas = await prisma.brand.findUnique({ where: { slug: 'adidas' } });
  const ivydaleStreet = await prisma.brand.findUnique({ where: { slug: 'ivydale-street' } });
  const capeTownKicks = await prisma.brand.findUnique({ where: { slug: 'cape-town-kicks' } });

  if (shirts && hoodies && adidas && ivydaleStreet && capeTownKicks) {
    const products = [
      {
        name: 'Ivydale Oversized Hoodie',
        slug: 'ivydale-oversized-hoodie',
        description: 'Heavyweight cotton hoodie with street fit.',
        price: 799,
        comparePrice: 899,
        stock: 30,
        isFeatured: true,
        brandId: ivydaleStreet.id,
        categoryId: hoodies.id,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      },
      {
        name: 'Cape Town Graphic Tee',
        slug: 'cape-town-graphic-tee',
        description: 'Soft cotton tee with local graphic print.',
        price: 499,
        stock: 40,
        isFeatured: true,
        brandId: capeTownKicks.id,
        categoryId: shirts.id,
        image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573',
      },
      {
        name: 'Adidas Urban Jersey',
        slug: 'adidas-urban-jersey',
        description: 'Breathable jersey for daily wear.',
        price: 1099,
        stock: 20,
        isFeatured: false,
        brandId: adidas.id,
        categoryId: shirts.id,
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990',
      },
    ];

    for (const product of products) {
      const created = await prisma.product.upsert({
        where: { slug: product.slug },
        update: {
          name: product.name,
          description: product.description,
          price: product.price,
          comparePrice: product.comparePrice ?? null,
          stock: product.stock,
          isFeatured: product.isFeatured,
          isActive: true,
          brandId: product.brandId,
          categoryId: product.categoryId,
        },
        create: {
          name: product.name,
          slug: product.slug,
          description: product.description,
          price: product.price,
          comparePrice: product.comparePrice ?? null,
          stock: product.stock,
          isFeatured: product.isFeatured,
          isActive: true,
          brandId: product.brandId,
          categoryId: product.categoryId,
        },
      });

      const imageCount = await prisma.productImage.count({
        where: { productId: created.id },
      });
      if (imageCount === 0) {
        await prisma.productImage.create({
          data: {
            productId: created.id,
            url: product.image,
            publicId: `${created.slug}-seed-image`,
            alt: product.name,
            position: 0,
          },
        });
      }
    }
    console.log('✅ Sample products created');
  }

  await prisma.blogTag.upsert({ where: { slug: 'fashion' }, update: {}, create: { name: 'Fashion', slug: 'fashion' } });
  await prisma.blogTag.upsert({ where: { slug: 'style' }, update: {}, create: { name: 'Style', slug: 'style' } });
  console.log('✅ Blog tags created');

  console.log('🎉 Seeding complete!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
