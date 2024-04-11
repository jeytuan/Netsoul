const WallpaperEngine: React.FC = () => {
  const wallpaper = '/images/wallpapers/sunset_beach_stretched.png'; // Example static image

  return (
    <div className="relative w-full min-h-screen">
      <img
        src={wallpaper}
        alt="Wallpaper"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default WallpaperEngine;
