interface ProfileImageProps {
    src: string;
  }
  
  const ProfileImage: React.FC<ProfileImageProps> = ({ src }) => {
    return (
      <div className="relative group">
        {/* Glowing Border Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse-neon"></div>
        
        {/* Main Image */}
        <div className="relative">
          <img
            src={src}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-400/50 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Holographic Overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    );
  };
  
  export default ProfileImage;