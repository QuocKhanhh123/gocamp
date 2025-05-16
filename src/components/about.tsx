'use client';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-center text-2xl font-bold text-[#6B4F29] uppercase mb-10 tracking-wider">
        Giới thiệu về GoCamp
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-[#d8e3de] p-6 flex justify-center">
          <img
            src="/LogoWhite.png"
            alt="GoCamp Logo"
            className="max-w-full h-auto"
          />
        </div>
        <div className="text-[#3d5d52] leading-relaxed text-justify text-[16px]">
          <p>
            <strong>GoCamp</strong> – là nền tảng trực tuyến hàng đầu tại Đà Nẵng, chuyên cung cấp dịch vụ cho thuê và mua sắm thiết bị cắm trại. Các sản phẩm trên <strong>GoCamp</strong> – được tuyển chọn kỹ lưỡng, đảm bảo chất lượng cao, độ bền tốt và tính tiện dụng, phù hợp với điều kiện thời tiết và môi trường tại Đà Nẵng.
          </p>
          <p className="mt-4">
            Chúng tôi mang đến giải pháp trọn gói cho những ai yêu thích cuộc sống ngoài trời, từ cá nhân đến gia đình, với nhiều lựa chọn linh hoạt, giúp tiết kiệm chi phí và bảo vệ môi trường thông qua việc khuyến khích thuê thay vì mua.
          </p>
        </div>
      </div>
    </section>
  );
}
