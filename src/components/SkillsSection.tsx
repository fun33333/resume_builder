import { Plus, Trash2 } from 'lucide-react';

interface Skill {
  category: string;
  items: string[];
}

interface SkillsSectionProps {
  data: Skill[];
  onChange: (data: Skill[]) => void;
}

export default function SkillsSection({ data, onChange }: SkillsSectionProps) {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        category: '',
        items: ['']
      }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const handleCategoryChange = (index: number, value: string) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      category: value
    };
    onChange(newData);
  };

  const handleAddSkill = (categoryIndex: number) => {
    const newData = [...data];
    newData[categoryIndex] = {
      ...newData[categoryIndex],
      items: [...newData[categoryIndex].items, '']
    };
    onChange(newData);
  };

  const handleRemoveSkill = (categoryIndex: number, skillIndex: number) => {
    const newData = [...data];
    newData[categoryIndex] = {
      ...newData[categoryIndex],
      items: newData[categoryIndex].items.filter((_, i) => i !== skillIndex)
    };
    onChange(newData);
  };

  const handleSkillChange = (categoryIndex: number, skillIndex: number, value: string) => {
    const newData = [...data];
    newData[categoryIndex] = {
      ...newData[categoryIndex],
      items: newData[categoryIndex].items.map((item, i) => i === skillIndex ? value : item)
    };
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">
          Skills
        </h3>
        <button
          onClick={handleAdd}
          className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {data.map((category, categoryIndex) => (
          <div key={categoryIndex} className="p-6 bg-gray-700/50 rounded-xl space-y-6 relative group">
            {data.length > 1 && (
              <button
                onClick={() => handleRemove(categoryIndex)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-red-500/20 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Category
              </label>
              <input
                type="text"
                value={category.category}
                onChange={(e) => handleCategoryChange(categoryIndex, e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="e.g., Technical Skills, Soft Skills, etc."
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-300">
                  Skills
                </label>
                <button
                  onClick={() => handleAddSkill(categoryIndex)}
                  className="p-1 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(categoryIndex, skillIndex, e.target.value)}
                      className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Enter a skill"
                    />
                    {category.items.length > 1 && (
                      <button
                        onClick={() => handleRemoveSkill(categoryIndex, skillIndex)}
                        className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}