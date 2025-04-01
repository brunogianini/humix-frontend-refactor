"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { json } from "stream/consumers";

export default function AddAlbum() {

    const [album, setAlbum] = useState("")
    const [banda, setBanda] = useState("")

    async function addAlbum(){
       await fetch("/api/albums", {
            method: "POST",
            body: JSON.stringify({
                nome: album,
                banda: banda
            })
        })
    }

    return (
        <Dialog>
        <DialogTrigger asChild><Button className="cursor-pointer">Adicionar Álbum</Button></DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Adicionar Álbum</DialogTitle>
            </DialogHeader>
            
            <div className="flex gap-5 flex-col mt-5">
                <Label>Nome</Label>
                <Input id="album" className="col-span-3" onChange={(e) => {setAlbum(e.target.value)}}/>

                <Label>Banda</Label>
                <Input id="banda" className="col-span-3" onChange={(e) => {setBanda(e.target.value)}}/>
            </div>



            <DialogFooter>
                <Button type="submit" onClick={() => addAlbum()}>Adicionar</Button>
            </DialogFooter>

        </DialogContent>
        </Dialog>
    );
}
