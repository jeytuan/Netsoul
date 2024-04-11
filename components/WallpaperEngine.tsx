const WallpaperEngine: React.FC = () => {
  const wallpaper = '/images/wallpapers/sunset_beach_stretched.png'; // Example static image

  return (
    <div className="relative w-full h-screen"> {/* Changed min-h-screen to h-screen */}
      <img
        src={wallpaper}
        alt="Wallpaper"
        className="absolute inset-0 w-full h-full object-cover" // Ensure the image covers the div completely
        style={{ maxHeight: 'calc(100vh - var(--navbar-height, 60px))' }} // Adjust for navbar height
      />
    </div>
  );
};

export default WallpaperEngine;
