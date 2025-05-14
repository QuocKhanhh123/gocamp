"use client";
import CampsiteList from "@/components/CampsiteList";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      homepahe
      <CampsiteList data={data} />

    </div>
  );
}
