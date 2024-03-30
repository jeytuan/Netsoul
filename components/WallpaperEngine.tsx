// @use client
import { useState, useEffect } from 'react';

const WallpaperEngine: React.FC = () => {
  const wallpapers = [
    '/images/wallpapers/bigsur.png',
    '/images/wallpapers/boardWalk_arcade.png',
    '/images/wallpapers/coastal_banner.png',
    '/images/wallpapers/santaCruz.png'
  ];

  const [currentWallpaper, setCurrentWallpaper] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWallpaper((currentWallpaper + 1) % wallpapers.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [currentWallpaper, wallpapers.length]);

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <img
        src={wallpapers[currentWallpaper]}
        alt="Wallpaper"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default WallpaperEngine;
