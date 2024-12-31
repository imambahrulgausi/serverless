import supabase from "../../utils/supabase";
import CardMahasiswa from "../components/CardMahasiswa";
import SearchForm from "@/app/components/SearchForm";
import Signout from "../components/Signout";

export const revalidate = 20;

export default async function Home() {
  const { data: mahasiswa, error } = await supabase
    .from("mahasiswa")
    .select()
    .order('id', { ascending: true });

  console.log(mahasiswa);

  if (error) {
    console.log(error.message);
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-300 text-black p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center justify-center px-4 py-2 rounded bg-blue-500 text-white rounded hover:bg-gray-500 transition duration-200">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex items-center justify-center px-4 py-2 rounded bg-blue-500 text-white px-20 py-2 rounded hover:bg-gray-700">
          <Signout />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-gray-200 shadow-md py-4 px-6 flex justify-between items-center">
          {/* Logo / Judul */}
          <div className="text-2xl font-bold text-600">Data Admin Mahasiswa</div>

          {/* SearchForm */}
          <SearchForm />
        </div>
        <div className="flex flex-wrap p-4 gap-4">
          {mahasiswa &&
            mahasiswa.map((mhs, idx) => (
              <CardMahasiswa
                key={idx}
                nim={mhs.nim}
                nama={mhs.nama}
                angkatan={mhs.angkatan}
                prodi={mhs.prodi}
                foto={mhs.foto}
              />
            ))}
        </div>
        </div>
    </div>
  );
}
