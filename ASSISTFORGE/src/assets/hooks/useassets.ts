import { useState } from "react";
import type { Assist } from "../type";

export function useAssets() {
    const [assets, setAssets] = useState<Assist[]>([]);

    function addAsset(asset: Assist) {
        setAssets((prevAssets) => [...prevAssets, asset]);
    }

    return { assets, setAssets, addAsset };
}
