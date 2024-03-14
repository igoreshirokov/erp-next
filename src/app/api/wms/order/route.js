import { defaultException } from "@/exceptions/default";
import { db } from '@/app/api/_base'

function getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}
export async function GET(req) {
    const { searchParams } = req.nextUrl
    
    return new Response(JSON.stringify({data: [
        {
            id: 1,
            name: 'Order 1'
        }
    ]}), {
        headers: {
            'Content-type': 'application/json'
        }
    })
}


/**
 * 
 * @param 
  id Int @id @default(autoincrement())
  name String
  manager String
  client String
  phone String
  address String
  comments String
  goods Good[]} data 
 */
async function createOrder(data) {
    try {
        const newOrder = await db.order.create({
            data: {...data}
        })
    } catch (error) {
        console.error(defaultException('1', 'Ошибка создания заказа в БД'), error)
        return defaultException('1', 'Ошибка создания заказа в БД')
    } finally {
        await db.$disconnect()
    }
    return newOrder
}

export async function POST(req) {
    const data = await req.json()
    const { fields, selected } = data

    // Обработка заказа
    try {
        const newOrder = createOrder(fields) 
    } catch (error) {
        return new Response(JSON.stringify(error))
    }
    
    // Обработка товаров
    return new Response(JSON.stringify(defaultException()),{
        status: 200,
        headers: { 'Content-type': 'application/json'}
    })
}