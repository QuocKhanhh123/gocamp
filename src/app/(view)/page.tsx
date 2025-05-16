"use client";
import CampsiteList from "@/components/CampsiteList";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Slide from "@/components/imageSlide";
import ProductList from "@/components/ProductList";
import About from "@/components/about";

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
      <Slide />
      <ProductList />
      <About />
    </div>
  );
}
