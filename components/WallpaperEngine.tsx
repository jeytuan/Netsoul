const WallpaperEngine: React.FC = () => {
  const wallpaper = '/images/wallpapers/bigsur.png'; // Example static image

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <img
        src={wallpaper}
        alt="Wallpaper"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default WallpaperEngine;
