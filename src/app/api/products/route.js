

const products = [
    {
        id: 1,
        name: 'Product 1',
        category: 'Cats 1',
        price: 100.00,
        barcode: 100001,
        count: 10
    },
    {
        id: 2,
        name: 'Product 2',
        category: 'Cats 1',
        price: 100.00,
        barcode: 100001,
        count: 10
    },
];



export async function GET() {
    return Response.json({data: products});
}