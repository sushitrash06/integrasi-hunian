"use client"
import { FC, useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const roadmapData: AccordionItem[] = [
  {
    id: 1,
    title: "Survey",
    content: "Hampir semua pekerjaan pada Integrasi Hunian harus diawali dengan melakukan survey agar Anda bisa menyampaikan seluruh detail impian bangunan Anda kepada kami sehingga kami dapat menganalisanya dengan tepat.",
  },
  {
    id: 2,
    title: "Konsultasi dan Gambar Arsitek",
    content: `Jika Anda sudah memiliki gambar desain sendiri dari arsitek lain, Anda tinggal mengkomunikasikan kepada tim Quantity Surveyor kami sehingga kami bisa mempelajari gambar tersebut.
    
Namun, jika Anda belum memiliki gambar desain rumah, kami menyediakan jasa desain gambar arsitek secara GRATIS dengan syarat Anda menggunakan jasa sipilnya kepada kami juga. Sebagai bukti tanda jadi, Anda transfer sebesar Rp. 10.000.000,- terlebih dahulu dan jika Anda menggunakan jasa sipil Integrasi Hunian, maka uang sebesar Rp. 10.000.000,- akan dianggap sebagai pembayaran sipil dan mengurangi nilai total RAB.

Namun, jika Anda tidak jadi menggunakan jasa kami, maka kami akan charge sesuai dengan harga jasa desain kami. Jika ada kelebihan, maka uangnya akan kami kembalikan.`,
  },
  {
    id: 3,
    title: "RAB",
    content: `Tahap pengiriman Rencana Anggaran Biaya akan berlangsung setelah tahap konsultasi gambar selesai. Jika Anda mengkomunikasikan budget Anda kepada kami, maka kami akan buatkan RAB sesuai dengan bugdet Anda. Dalam RAB akan kami rincikan detail pekerjaan, spesifikasi bahan material, durasi lama pekerjaan, serta biaya masing-masing pekerjaan. Kami berusaha memberikan penawaran RAB yang sesuai budget Anda.

Tahap ini, Anda bisa mempelajari RAB kami dan kemudian bisa menyesuaikan dengan budget Anda. Anda juga dapat melakukan pengurangan atau penambahan pekerjaan sehingga RAB bisa disesuaikan dengan budget Anda.`,
  },
  {
    id: 4,
    title: "Surat Kontrak Kerja",
    content: `Surat kontrak kerja akan kami buatkan jika Anda setuju dengan RAB yang kami berikan. Surat ini akan berisi:

- Detail biaya dilengkapi spesifikasi material
- Durasi proyek
- Jadwal pembayaran
- Hak kewajiban antara kontraktor dan klien

Pekerjaan tidak dapat dirubah, dikurangi, maupun ditambah berdasarkan surat kontrak kerja. Jika Anda ingin mengubah, maka kami akan buatkan Addendum pekerjaan.`,
  },
  {
    id: 5,
    title: "Pembayaran Bertahap",
    content: "Setelah penandatanganan surat kontrak, maka invoice akan segera dikirim dan mohon segera lakukan pembayaran tahap pertama agar pekerjaan bisa dimulai.",
  },
  {
    id: 6,
    title: "Pekerjaan",
    content: `Pekerjaan akan dilaksanakan sesuai dengan ketentuan RAB dan surat kontrak kerja. Jika Anda ingin melakukan perubahan, penambahan, maupun pengurangan, mohon komunikasikan dengan manager proyek kami agar proyek tidak terganggu.

Mohon jangan meminta perubahan, penambahan, maupun pengurangan pekerjaan langsung kepada tukang kami karena dapat mengganggu jalannya proyek dan kami akan terlepas dari segala tuntutan yang ada.`,
  },
  {
    id: 7,
    title: "Addendum",
    content: `Jika Anda melakukan perubahan, pengurangan, maupun penambahan pekerjaan dan sudah mengkomunikasikan kepada manajer proyek kami, maka kami akan buatkan surat “Addendum”.

Jika ada tambahan pekerjaan dalam “Addendum” maka kami akan tagihkan dalam invoice terpisah. Jika ada pengurangan pekerjaan, maka akan kami kembalikan uangnya atau penyesuaikan RAB.`,
  },
  {
    id: 8,
    title: "Berita Acara",
    content: `Setelah melaksanakan pekerjaan, kami melakukan Checklist pekerjaan bersama Anda untuk memastikan kualitas pekerjaan sesuai dengan keinginan Anda. Jika Anda setuju, maka kami akan buatkan berita acara.

Berita acara kami bagi 2 yaitu:

- Berita Acara Parsial: Yaitu berita acara per termin pekerjaan
- Berita Acara Final: Yaitu berita acara seluruh pekerjaan

Jika Anda sudah tandatangan dalam berita acara, maka Anda sudah tidak dapat melakukan revisi pekerjaan lagi.`,
  },
  {
    id: 9,
    title: "Sertifikat Garansi Pekerjaan",
    content: "Garansi pekerjaan selama 3 bulan kami berikan guna menjaga kualitas pekerjaan sekaligus agar Anda nyaman dan aman menggunakan jasa Integrasi Hunian.",
  },
  {
    id: 10,
    title: "Bonus Untuk Anda",
    content: `Jika Anda PUAS menggunakan jasa dari Integrasi Hunian, kemudian Anda memberikan TESTIMONI dan MEREKOMENDASIKAN jasa kami kepada orang-orang yang Anda sayangi, maka kami akan memberikan bonus jasa kami yang lain.`,
  },
];

const RoadmapSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 flex flex-wrap">
        <div className="w-[50%]">
        <h2 className="text-3xl font-bold text-black">
          Bekerjasama Dengan <span className="text-maroon-600">
          Integrasi Hunian </span>
        </h2>
        <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
          Roadmap Bekerjasama Dengan Integrasi Hunian
        </h3>
        <p className="text-gray-600 mb-8">
          Terima kasih Anda telah menjadikan Integrasi Hunian sebagai salah satu bahan
          pertimbangan untuk membangun hunian impian Anda. Adapun proses yang Anda harus lalui jika
          menggunakan jasa kami adalah seperti tercantum pada tabel di bawah.
        </p>
        </div>
   

        <div className="rounded-lg shadow-md p-6 w-[50%]">
          {roadmapData.map((item) => (
            <div key={item.id} className="mb-4 border-b last:border-b-0 border-maroon-300">
              <button
                className={`flex items-center justify-between w-full py-4 text-left text-maroon-700 font-semibold ${
                  activeIndex === item.id ? "text-maroon-800" : ""
                }`}
                onClick={() => toggleAccordion(item.id)}
              >
                <span>{item.title}</span>
                <span className="text-maroon-600">
                  {activeIndex === item.id ? "-" : "+"}
                </span>
              </button>
              {activeIndex === item.id && (
                <div className="text-gray-700 mt-2">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
