type WallpaperEngineProps = {
  currentWallpaper: string;
};

const WallpaperEngine: React.FC<WallpaperEngineProps> = ({ currentWallpaper }) => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <img
        src={currentWallpaper}
        alt="Wallpaper"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default WallpaperEngine;
