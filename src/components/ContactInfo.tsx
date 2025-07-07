import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

interface ContactInfoProps {
    phone: string;
    email: string;
    address: string;
    linkedin: string;
  }
  
  const ContactInfo: React.FC<ContactInfoProps> = ({ phone, email, address, linkedin }) => {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-orbitron font-bold gradient-text mb-4 flex items-center">
          <FaPhone className="mr-2 text-cyan-400" />
          Contact Information
        </h3>
        
        <div className="space-y-3">
          {phone && (
            <div className="flex items-center space-x-3 p-3 glass rounded-lg hover:bg-cyan-500/10 transition-colors duration-300">
              <FaPhone className="text-cyan-400 text-lg flex-shrink-0" />
              <div>
                <p className="text-cyan-300 text-sm font-rajdhani font-medium">Phone</p>
                <p className="text-white font-exo">{phone}</p>
              </div>
            </div>
          )}
          
          {email && (
            <div className="flex items-center space-x-3 p-3 glass rounded-lg hover:bg-purple-500/10 transition-colors duration-300">
              <FaEnvelope className="text-purple-400 text-lg flex-shrink-0" />
              <div>
                <p className="text-purple-300 text-sm font-rajdhani font-medium">Email</p>
                <p className="text-white font-exo break-all">{email}</p>
              </div>
            </div>
          )}
          
          {address && (
            <div className="flex items-start space-x-3 p-3 glass rounded-lg hover:bg-pink-500/10 transition-colors duration-300">
              <FaMapMarkerAlt className="text-pink-400 text-lg flex-shrink-0 mt-1" />
              <div>
                <p className="text-pink-300 text-sm font-rajdhani font-medium">Address</p>
                <p className="text-white font-exo text-sm">{address}</p>
              </div>
            </div>
          )}
          
          {linkedin && (
            <div className="flex items-center space-x-3 p-3 glass rounded-lg hover:bg-blue-500/10 transition-colors duration-300">
              <FaLinkedin className="text-blue-400 text-lg flex-shrink-0" />
              <div>
                <p className="text-blue-300 text-sm font-rajdhani font-medium">LinkedIn</p>
                <p className="text-white font-exo break-all">{linkedin}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ContactInfo;