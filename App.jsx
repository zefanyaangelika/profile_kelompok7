import auliaImg from "./assets/auliaa.png";

function ProfilAulia() {
    return(
        <div className="min-h-screen bg-[#8FA1BD] flex items-center justify-center p-6">
            <div className="bg-[#1E1E1E] w-full max-w-5xl rounded-[50px] p-10 flex gap-10">
                <div className="flex flex-col items-center w-1/2">
                    <img className="w-48 h-48 rounded-full mb-10" src={auliaImg} alt="foto"/>
                    <div className="w-full space-y-4">
                        <div className="bg-[#3E557D] text-white px-6 py-3 rounded-full">Nama Panjang: Aulia Sabillah</div>
                        <div className="bg-[#3E557D] text-white px-6 py-3 rounded-full">Jurusan/Prodi: Teknologi Informasi</div>
                        <div className="bg-[#3E557D] text-white px-6 py-3 rounded-full">Kelas: T2D</div>
                        <div className="bg-[#3E557D] text-white px-6 py-3 rounded-full">Domisili: Malang, Jawa Timur</div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="bg-[#3E557D] text-white p-6 rounded-2xl h-full">
                        <h2 className="text-lg font-semibold mb-4">Deskripsi:</h2>
                        <p className="text-md leading-relaxed">Saya merupakan seorang mahasiswa yang sedang menempuh pendidikan di Universitas Brawijaya dengan jurusan Teknologi Informasi. 
                          Saya memiliki kepribadian yang cenderung pendiam, namun suka mencoba hal-hal baru. Saya terbiasa memperhatikan detail dan mengerjakan sesuatu dengan cermat. 
                          Menurut saya, setiap pengalaman baru merupakan kesempatan untuk berkembang dan memahami banyak hal. Oleh karena itu, saya terus berusaha menjadi pribadi yang lebih baik dengan cara belajar dan beradaptasi terhadap berbagai situasi. 
                          Saya juga akan terus mengembangkan diri serta meningkatkan kualitas pribadi melalui berbagai pengalaman yang bermanfaat bagi masa depan.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfilAulia;