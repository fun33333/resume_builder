interface BackgroundEffectsProps {
  theme: string;
}

export default function BackgroundEffects({ theme }: BackgroundEffectsProps) {
  return (
    <>
      <div className={`fixed inset-0 opacity-10 pointer-events-none transition-colors duration-500 ${theme === 'dark' ? '' : 'hidden'}`}>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float-3d"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float-3d" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float-3d" style={{animationDelay: '6s'}}></div>
      </div>
      <div className={`matrix-bg-3d ${theme === 'dark' ? '' : 'hidden'}`}></div>
    </>
  );
} 