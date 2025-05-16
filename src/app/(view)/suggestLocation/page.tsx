"use client";
import CampsiteList from "@/components/CampsiteList";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState([]);

    const fetchData = async (filters = {}) => {
        const params = new URLSearchParams(filters as any).toString();
        const res = await fetch(`/api/camping/danang?${params}`);
        const json = await res.json();
        setData(json.data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-[#4b3f32] mb-8 uppercase tracking-widest">
                GỢI Ý ĐỊA ĐIỂM CẮM TRẠI
            </h1>
            <CampsiteList data={data} />
        </div>

    );
}
