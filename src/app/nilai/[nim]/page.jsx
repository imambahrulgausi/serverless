
import supabase from "../../../utils/supabase";

export const revalidate = 20;

export default async function NilaiByNim({ params }) {
    const{ nim } = params
    const { data: nilai, error } = await supabase
    .from("nilai")
    .select(`
        nim,nilai,semester,
        matakuliah(kdmk,matakuliah,semester,sks)`)
        .eq('nim', nim );
    console.log(nilai);
    
    if (error) {
        console.log(error.message);
    }

    return (
        <>
            <div>
      <h1 className="flex justify-center w-full border rounded-md p-2 bg-blue-600 text-white ml-2">Daftar Nilai Mahasiswa NIM: {nim}</h1>
      <table className="min-w-full divide-gray-200 mt4">
            <thead className="bg-gray-800">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Kode Mata Kuliah
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Mata Kuliah
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        SKS
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Semester
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Nilai
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {nilai.map((mhs) => (
                    <tr key={mhs} className="bg-white dark:bg-gray-600 hover:bg-gray-50
                    dark:hover:bg-gray-500 dark:text-white">
                        <td className="px-6 py-4 font-sm whitespace-nowrap">{mhs.matakuliah.kdmk}</td>
                        <td className="px-6 py-4 font-sm whitespace-nowrap">{mhs.matakuliah.matakuliah}</td>
                        <td className="px-6 py-4 font-sm whitespace-nowrap">{mhs.matakuliah.sks}</td>
                        <td className="px-6 py-4 font-sm whitespace-nowrap">{mhs.semester}</td>
                        <td className="px-6 py-4 font-sm whitespace-nowrap">{mhs.nilai}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
        </>
    )
}

// export default function NilaiByNim({ params }) {
//     const { nim } = params
//     return (
//         <>
//             <h1 className="text-md font-semibold m-2">
//                 Halaman Nilai untuk Nim : {nim}
//             </h1>
//         </>
//     )
// }