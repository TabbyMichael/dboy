import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

interface ImageSelectorProps {
  label: string;
  selectedImage: string;
  onSelect: (url: string) => void;
  type: 'avatar' | 'thumbnail';
}

const avatars = [
  '/assets/avatars/avatar-1.svg',
  '/assets/avatars/avatar-2.svg',
  '/assets/avatars/avatar-3.svg',
  '/assets/avatars/avatar-4.svg',
  '/assets/avatars/avatar-5.svg',
  '/assets/avatars/avatar-6.svg',
  '/assets/avatars/avatar-7.svg',
  '/assets/avatars/avatar-8.svg',
];

const thumbnails = [
  '/assets/thumbnails/thumbnail-1.svg',
  '/assets/thumbnails/thumbnail-2.svg',
  '/assets/thumbnails/thumbnail-3.svg',
  '/assets/thumbnails/thumbnail-4.svg',
  '/assets/thumbnails/thumbnail-5.svg',
  '/assets/thumbnails/thumbnail-6.svg',
  '/assets/thumbnails/thumbnail-7.svg',
  '/assets/thumbnails/thumbnail-8.svg',
];

const ImageSelector = ({ label, selectedImage, onSelect, type }: ImageSelectorProps) => {
  const images = type === 'avatar' ? avatars : thumbnails;

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            {selectedImage ? (
              <div className="flex items-center gap-2">
                <img
                  src={selectedImage}
                  alt="Selected image"
                  className="w-8 h-8 object-cover rounded"
                />
                <span>Selected Image</span>
              </div>
            ) : (
              <span>Select an image</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <ScrollArea className="h-[300px]">
            <div className="grid grid-cols-3 gap-2 p-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => onSelect(image)}
                  className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${selectedImage === image ? 'border-dboy-pink' : 'border-transparent hover:border-gray-200'}`}
                >
                  <img
                    src={image}
                    alt={`${type} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ImageSelector;