import { Album } from "@/types/Album";

export default function AlbumItem({ album }: { album: Album }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <img src={album.capa} alt="teste" className="h-12 w-12 rounded-md object-cover" />
        <div className="flex-1 min-w-0">
          <h4 className="truncate text-sm font-medium text-white">{album.nome}</h4>
          <p className="truncate text-xs text-zinc-400">{album.banda.nome}</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-white">{album.nota}</span>
        </div>
      </div>
    </div>
  );
}
