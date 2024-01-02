const products = [
    {
        id: 1,
        name: 'Product 1',
    },
    {
        id: 2,
        name: 'Product 2',
    },
];

export async function GET() {
    const data = products;
    return Response.json({data});
}