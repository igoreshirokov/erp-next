import Loading from "@/components/loaders/base_loading";
import { WmsStateProvider } from "@/components/wms/products/context";
import { ProductList } from "@/components/wms/products/product-list";
import { Suspense } from "react";

export default function Wms() {
    return (
        <main>
            <h1>Склад</h1>
            <WmsStateProvider>    
                <Suspense fallback={<Loading />}>
                    <ProductList />
                </Suspense>
            </WmsStateProvider>    
        
        </main>
    )
}