"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function CardMahasiswa(props){
    const {nim, nama, angkatan, prodi, foto} = props;

    return(
        <div className="p-2 m-2 border border-slate-300 rounded-lg grid justify-items-center text-slate-700"> 
        <CldImage className='rounded-full'
        src = {foto}
        width="75"
        height="75"
        crop={{
            type: 'auto',
            source: true
        }}/>
        <h1 className="text-xl font-semibold">{nama}</h1>
                <p>NIM      : {nim} </p>
                <p>Angkatan : {angkatan} </p>
                <p>NIM      : {prodi} </p>
                <Link className="text-pink-700 underline hover:text-blue-700 mt-2"
                      href={`/nilai/${nim}`}>
                    Nilai
                </Link>
        </div>
    )
}