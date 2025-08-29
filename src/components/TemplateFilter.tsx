import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface FilterState {
  search: string;
  category: string;
  price: string;
  features: string[];
  sortBy: string;
}

interface TemplateFilterProps {
  onFilterChange: (filters: FilterState) => void;
  totalCount?: number;
}

const categories = [
  { value: 'all', label: 'Все категории' },
  { value: 'fashion', label: 'Мода' },
  { value: 'beauty', label: 'Красота' },
  { value: 'sports', label: 'Спорт' },
  { value: 'consulting', label: 'Консалтинг' },
  { value: 'food', label: 'Еда' },
  { value: 'tech', label: 'Технологии' },
  { value: 'b2b', label: 'B2B' }
];

const priceRanges = [
  { value: 'all', label: 'Любая цена' },
  { value: 'free', label: 'Бесплатно' },
  { value: 'premium', label: 'Премиум' },
  { value: 'enterprise', label: 'Корпоративный' }
];

const features = [
  'Мобильная версия',
  'SEO оптимизация',
  'Мультиязычность',
  'Интеграция с CRM',
  'Онлайн платежи',
  'Блог',
  'Галерея',
  'Форма обратной связи'
];

const sortOptions = [
  { value: 'popular', label: 'По популярности' },
  { value: 'newest', label: 'Сначала новые' },
  { value: 'name', label: 'По алфавиту' },
  { value: 'price', label: 'По цене' }
];

const TemplateFilter: React.FC<TemplateFilterProps> = ({ onFilterChange, totalCount = 0 }) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'all',
    price: 'all',
    features: [],
    sortBy: 'popular'
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const updateFilter = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleFeature = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature];
    updateFilter('features', newFeatures);
  };

  const clearAllFilters = () => {
    const resetFilters: FilterState = {
      search: '',
      category: 'all',
      price: 'all',
      features: [],
      sortBy: 'popular'
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const activeFiltersCount = [
    filters.search,
    filters.category !== 'all' ? filters.category : null,
    filters.price !== 'all' ? filters.price : null,
    ...filters.features
  ].filter(Boolean).length;

  return (
    <div className="space-y-4">
      {/* Основные фильтры */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по шаблонам..."
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={filters.category} onValueChange={(value) => updateFilter('category', value)}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={activeFiltersCount > 0 ? 'border-accent' : ''}
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Фильтры
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Расширенные фильтры */}
      {showAdvanced && (
        <div className="p-4 border rounded-lg bg-muted/30 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ценовая категория</label>
              <Select value={filters.price} onValueChange={(value) => updateFilter('price', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Особенности ({filters.features.length} выбрано)
              </label>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                {features.map((feature) => (
                  <Badge
                    key={feature}
                    variant={filters.features.includes(feature) ? "default" : "outline"}
                    className={`cursor-pointer transition-colors ${
                      filters.features.includes(feature) 
                        ? 'bg-accent hover:bg-accent/80' 
                        : 'hover:bg-accent hover:text-white'
                    }`}
                    onClick={() => toggleFeature(feature)}
                  >
                    {feature}
                    {filters.features.includes(feature) && (
                      <X className="w-3 h-3 ml-1" />
                    )}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2 border-t">
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Сбросить все фильтры
            </Button>
            <p className="text-sm text-muted-foreground">
              Найдено шаблонов: <strong>{totalCount}</strong>
            </p>
          </div>
        </div>
      )}

      {/* Активные фильтры */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Активные фильтры:</span>
          
          {filters.search && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Поиск: {filters.search}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => updateFilter('search', '')} 
              />
            </Badge>
          )}

          {filters.category !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {categories.find(c => c.value === filters.category)?.label}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => updateFilter('category', 'all')} 
              />
            </Badge>
          )}

          {filters.price !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {priceRanges.find(p => p.value === filters.price)?.label}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => updateFilter('price', 'all')} 
              />
            </Badge>
          )}

          {filters.features.map((feature) => (
            <Badge key={feature} variant="secondary" className="flex items-center gap-1">
              {feature}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => toggleFeature(feature)} 
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateFilter;