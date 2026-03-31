import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl w-full flex items-center gap-8">
        
        {/* KIRI: TEKS */}
        <div className="text-black flex-1">
          <h1 className="text-3xl font-bold">
            Egalia Diantika Putri
          </h1>

          <p className="mt-3">Kelas: T2D</p>
          <p>Jurusan: Teknologi Informasi</p>
          <p>Domisili: Lumajang</p>

          <p className="mt-4 text-sm leading-relaxed">
            Saya adalah seorang pelajar yang tertarik pada dunia teknologi, khususnya dalam pembuatan website. 
            Saat ini saya sedang belajar menggunakan React dan Tailwind CSS untuk mengembangkan kemampuan dalam bidang frontend. 
            Saya juga senang mencoba hal-hal baru dan terus berlatih agar kemampuan coding saya semakin meningkat. 
            Harapan saya, ke depannya saya bisa menjadi developer yang terampil dan mampu membuat website yang bermanfaat dan menarik.
          </p>
        </div>

        {/* KANAN: FOTO */}
        <div className="flex justify-center">
          <img
            src="/images/egalia.jpeg"
            alt="Foto Profil"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>

      </div>

    </div>
  );
}

export default App;