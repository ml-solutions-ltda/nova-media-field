<?php

declare(strict_types=1);

namespace Mlsolutions\NovaMediaField\Fields;

use Laravel\Nova\Fields\Field;

/**
 * Read-only index thumbnail for a URL resolved and authorized by the host app.
 * The field never derives URLs from storage paths or loads original files.
 */
final class Thumbnail extends Field
{
    public $component = 'nova-media-thumbnail';

    public function __construct($name, $attribute = null, $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);

        $this->onlyOnIndex();
        $this->withMeta([
            'altText' => $name,
            'fallbackText' => __('Preview unavailable'),
            'thumbnailWidth' => 64,
            'thumbnailHeight' => 64,
        ]);
    }

    public function altText(string $text): static
    {
        $this->withMeta(['altText' => $text]);

        return $this;
    }

    public function fallbackText(string $text): static
    {
        $this->withMeta(['fallbackText' => $text]);

        return $this;
    }

    public function dimensions(int $width, int $height): static
    {
        if ($width < 24 || $width > 320 || $height < 24 || $height > 320) {
            throw new \InvalidArgumentException('Thumbnail dimensions must be between 24 and 320 pixels.');
        }

        $this->withMeta([
            'thumbnailWidth' => $width,
            'thumbnailHeight' => $height,
        ]);

        return $this;
    }
}
