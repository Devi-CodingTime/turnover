import prisma from "@/app/lib/prisma";
import { faker } from "@faker-js/faker";

export async function POST() {
  try {
    // for (let i = 0; i < 100; i++) {
    //   await prisma.Category.create({
    //     data: {
    //         categoryname: faker.commerce.department(),
          
    //     },
    //   });
    // }
    Array.from({length:100}).map(async(_,i) =>{
        await prisma.Category.create({
            data:{
                categoryname:faker.commerce.department(),

            }
        })
    })
    console.log('Categories entered successfully!');
    res.json({msg:'Categories entered successfully!'});
  } catch (error) {
    console.error('Something went wrong:', error);
  } finally {
    await prisma.$disconnect();
  }
}
