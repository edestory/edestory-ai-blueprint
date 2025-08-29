import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Palette, Type, Layout, Eye, Download, Save } from 'lucide-react';

interface CustomizationPanelProps {
  templateData?: any;
  onThemeChange?: (theme: any) => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ 
  templateData, 
  onThemeChange 
}) => {
  const [theme, setTheme] = useState({
    colors: {
      primary: '#E6A853',
      background: '#ffffff',
      foreground: '#171717',
      accent: '#f0f0f0'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    layout: {
      headerHeight: 80,
      sidebarWidth: 240,
      borderRadius: 8
    },
    features: {
      darkMode: false,
      animations: true,
      shadows: true
    }
  });

  const handleThemeUpdate = (section: string, key: string, value: any) => {
    const newTheme = {
      ...theme,
      [section]: {
        ...theme[section as keyof typeof theme],
        [key]: value
      }
    };
    setTheme(newTheme);
    onThemeChange?.(newTheme);
  };

  const colorPresets = [
    { name: 'Графитовый', primary: '#3d3d3d', accent: '#E6A853' },
    { name: 'Элегантный', primary: '#1a1a1a', accent: '#gold' },
    { name: 'Минимал', primary: '#2563eb', accent: '#f3f4f6' },
    { name: 'Эко', primary: '#059669', accent: '#ecfdf5' }
  ];

  const fontOptions = [
    { name: 'Inter', description: 'Современный, читаемый' },
    { name: 'Playfair Display', description: 'Элегантный, премиум' },
    { name: 'Roboto', description: 'Универсальный' },
    { name: 'Poppins', description: 'Дружелюбный' }
  ];

  return (
    <Card className="w-80 h-fit">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Кастомизация</CardTitle>
            <CardDescription>Настройте theme.json</CardDescription>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700">
            Live Preview
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="colors" className="p-2">
              <Palette className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="fonts" className="p-2">
              <Type className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="layout" className="p-2">
              <Layout className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="features" className="p-2">
              <Eye className="w-4 h-4" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Цветовые схемы</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {colorPresets.map((preset) => (
                  <div 
                    key={preset.name}
                    className="p-2 border rounded cursor-pointer hover:border-accent transition-colors"
                    onClick={() => {
                      handleThemeUpdate('colors', 'primary', preset.primary);
                      handleThemeUpdate('colors', 'accent', preset.accent);
                    }}
                  >
                    <div className="flex gap-1 mb-1">
                      <div 
                        className="w-4 h-4 rounded" 
                        style={{ backgroundColor: preset.primary }}
                      />
                      <div 
                        className="w-4 h-4 rounded" 
                        style={{ backgroundColor: preset.accent }}
                      />
                    </div>
                    <span className="text-xs">{preset.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="primary-color">Основной цвет</Label>
                <div className="flex gap-2 mt-1">
                  <div 
                    className="w-8 h-8 rounded border" 
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                  <Input 
                    id="primary-color"
                    value={theme.colors.primary}
                    onChange={(e) => handleThemeUpdate('colors', 'primary', e.target.value)}
                    className="text-xs"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="accent-color">Акцентный цвет</Label>
                <div className="flex gap-2 mt-1">
                  <div 
                    className="w-8 h-8 rounded border" 
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                  <Input 
                    id="accent-color"
                    value={theme.colors.accent}
                    onChange={(e) => handleThemeUpdate('colors', 'accent', e.target.value)}
                    className="text-xs"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fonts" className="space-y-4">
            <div>
              <Label>Шрифт заголовков</Label>
              <Select 
                value={theme.fonts.heading} 
                onValueChange={(value) => handleThemeUpdate('fonts', 'heading', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {fontOptions.map((font) => (
                    <SelectItem key={font.name} value={font.name}>
                      <div>
                        <div className="font-medium">{font.name}</div>
                        <div className="text-xs text-muted-foreground">{font.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Шрифт текста</Label>
              <Select 
                value={theme.fonts.body} 
                onValueChange={(value) => handleThemeUpdate('fonts', 'body', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {fontOptions.map((font) => (
                    <SelectItem key={font.name} value={font.name}>
                      <div>
                        <div className="font-medium">{font.name}</div>
                        <div className="text-xs text-muted-foreground">{font.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="layout" className="space-y-4">
            <div>
              <Label>Высота шапки: {theme.layout.headerHeight}px</Label>
              <Slider
                value={[theme.layout.headerHeight]}
                onValueChange={([value]) => handleThemeUpdate('layout', 'headerHeight', value)}
                min={60}
                max={120}
                step={10}
                className="mt-2"
              />
            </div>

            <div>
              <Label>Скругление углов: {theme.layout.borderRadius}px</Label>
              <Slider
                value={[theme.layout.borderRadius]}
                onValueChange={([value]) => handleThemeUpdate('layout', 'borderRadius', value)}
                min={0}
                max={20}
                step={2}
                className="mt-2"
              />
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Темная тема</Label>
                <Switch
                  id="dark-mode"
                  checked={theme.features.darkMode}
                  onCheckedChange={(checked) => handleThemeUpdate('features', 'darkMode', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="animations">Анимации</Label>
                <Switch
                  id="animations"
                  checked={theme.features.animations}
                  onCheckedChange={(checked) => handleThemeUpdate('features', 'animations', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="shadows">Тени</Label>
                <Switch
                  id="shadows"
                  checked={theme.features.shadows}
                  onCheckedChange={(checked) => handleThemeUpdate('features', 'shadows', checked)}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="pt-4 border-t space-y-2">
          <Button variant="outline" size="sm" className="w-full">
            <Download className="w-4 h-4 mr-2" />
            Скачать theme.json
          </Button>
          <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
            <Save className="w-4 h-4 mr-2" />
            Применить изменения
          </Button>
        </div>

        <div className="text-xs text-muted-foreground p-3 bg-muted/50 rounded">
          <strong>Live Preview:</strong> Изменения применяются мгновенно. 
          Финальная версия будет сохранена в /content/theme.json
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomizationPanel;