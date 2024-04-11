// WallpaperEngine.tsx
const WallpaperEngine: React.FC = () => {
  const wallpaper = '/images/wallpapers/sunset_beach_stretched.png'; // Example static image

  return (
    <div className="relative w-full" style={{ height: '350px' }}> {/* Set the height to 350px */}
      <img
        src={wallpaper}
        alt="Wallaper"
        className="w-full h-full object-cover" // Covers the div with your image
      />
    </div>
  );
};

export default WallpaperEngine;
