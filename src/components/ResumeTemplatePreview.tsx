import { ChromePicker, ColorResult } from 'react-color';
import { useState } from 'react';

interface Template {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  features: string[];
  component: React.ComponentType<any>;
}

interface ResumeTemplatePreviewProps {
  template: Template;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  onSelect: () => void;
  onColorChange: (color: ColorResult, templateId: string, type: 'primary' | 'secondary' | 'accent') => void;
  sampleData: any;
}

export default function ResumeTemplatePreview({
  template,
  colors,
  onSelect,
  onColorChange,
  sampleData
}: ResumeTemplatePreviewProps) {
  const [editingColor, setEditingColor] = useState<'primary' | 'secondary' | 'accent' | null>(null);
  const Template = template.component;

  return (
    <div className="space-y-6">
      {/* Template Preview */}
      <div className="relative group">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="w-full" style={{ height: '400px' }}>
            <Template 
              data={sampleData}
              colors={colors}
            />
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
          <button
            onClick={onSelect}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            Use This Template
          </button>
        </div>
      </div>

      {/* Template Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {template.name}
          </h3>
          <p className="text-gray-400">
            {template.description}
          </p>
        </div>

        {/* Color Customization */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300">
            Customize Colors
          </h4>
          <div className="flex gap-3">
            {(['primary', 'secondary', 'accent'] as const).map((colorType) => (
              <div key={colorType} className="relative">
                <button
                  className="w-8 h-8 rounded-lg border border-white/20"
                  style={{ backgroundColor: colors[colorType] }}
                  onClick={() => setEditingColor(colorType)}
                />
                {editingColor === colorType && (
                  <div className="absolute z-10 top-full left-0 mt-2">
                    <div 
                      className="fixed inset-0" 
                      onClick={() => setEditingColor(null)}
                    />
                    <div className="relative">
                      <ChromePicker
                        color={colors[colorType]}
                        onChange={(color) => onColorChange(color, template.id, colorType)}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-2">
            Features
          </h4>
          <ul className="space-y-1">
            {template.features.map((feature, index) => (
              <li 
                key={index}
                className="text-sm text-gray-400 flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 