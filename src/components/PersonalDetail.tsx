import { FaRocket } from 'react-icons/fa';

interface PersonalDetailProps {
  detail: string;
}

const PersonalDetail: React.FC<PersonalDetailProps> = ({ detail }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-orbitron font-bold gradient-text mb-4 flex items-center">
        <FaRocket className="mr-2 text-pink-400" />
        Professional Summary
      </h3>
      
      <div className="p-4 glass rounded-lg border border-pink-400/20">
        <p className="text-white font-exo leading-relaxed text-justify">
          {detail || 'A passionate and innovative professional with expertise in modern technologies and a drive for excellence in every project undertaken.'}
        </p>
      </div>
    </div>
  );
};

export default PersonalDetail;