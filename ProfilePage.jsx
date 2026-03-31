import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-blue-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-4xl w-full text-white">
        <h1 className="text-3xl font-bold mb-6">About Me!</h1>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold">Zefanya Angelika Putri Bagariang</h2>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">Kelas:</p>
                <p>T2D</p>
              </div>
              <div>
                <p className="font-semibold">Prodi:</p>
                <p>Teknologi Informasi</p>
              </div>
              <div>
                <p className="font-semibold">Domisili:</p>
                <p>Medan</p>
              </div>
              <div>
                <p className="font-semibold">Kontak:</p>
                <p>081350077665</p>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Tentang Diri:</p>
              <p className="text-sm leading-relaxed">
                Saya adalah mahasiswa Teknologi Informasi yang memiliki minat besar 
                dalam pengembangan web. Selain kemampuan teknis, saya juga senang mempelajari 
                al-hal baru dan berkolaborasi dengan individu kreatif. Bagi saya, 
                dunia IT bukan hanya tentang komputer, tetapi bagaimana menciptakan solusi 
                nyata untuk berbagai permasalahan. Saya juga memiliki kemampuan bekerja dalam 
                tim, disiplin, serta semangat belajar yang tinggi.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
