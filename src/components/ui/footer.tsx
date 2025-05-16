import Image from 'next/image';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#9CB4A9] text-white px-10 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo + Contact info */}
        <div className="flex items-start gap-10">
          {/* Logo + Social icons */}
          <div className="flex flex-col items-start gap-4">
            <Image src="/logo.png" alt="Logo" width={120} height={60} />

            {/* Social Icons dưới logo */}
            <div className="flex items-center gap-6 text-white text-sm">
              <div className="flex items-center gap-2">
                <FaInstagram className="text-xl" />
                <span>Zalo</span>
              </div>
              <FaFacebook className="text-xl" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-white text-base">
            <h3 className="text-lg font-semibold mb-2">Thông tin liên hệ</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>120, Hoàng Minh Thảo, Đại học Duy Tân,</li>
              <li>Zalo: 0383210286</li>
            </ul>
          </div>
        </div>

        {/* Nếu muốn thêm gì bên phải có thể chèn ở đây */}
      </div>
    </footer>
  );
}
