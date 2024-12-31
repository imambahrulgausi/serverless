import CardMahasiswa from "@/app/components/CardMahasiswa"
import supabase from "../../../../utils/supabase"


export default async function GetMhsByNimSemester({ params }) {
    const{ nim, semester } = params
    const { data: nilai, error } = await supabase.from('nilai').select(`
    nim,nilai,semester,matakuliah(kdmk,matakuliah,semester,sks)`)
    .eq('nim', nim).eq('semester', semester);

    if (error) {
        console.log(error.message);
    }

    console.log(nilai)

    const { data: mahasiswa, err } = await supabase.from("mahasiswa").select(`
        *    
    `).eq('nim', nim);
    if (err) {
        console.log(err);
    }

    console.log(mahasiswa);
    return (
        <div>
            <h1 className="font-semibold ml-2">Daftar Nilai</h1>
            {nilai.map((nil, idx) => 
                <div key={idx} className="ml-8 mb-3">
                    <h2 className="font-medium">{nil.matakuliah.matakuliah}</h2>
                    <li className="text">Kode MK : {nil.matakuliah.kdmk}</li>
                    <li className="text">SKS : {nil.matakuliah.sks}</li>
                    <li className="text">Semester : {nil.semester}</li>
                    <li className="text">Kode MK : {nil.nilai}</li>
                </div>
            )}
        </div>
    )
}